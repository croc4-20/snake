import 'es6-shim';
import * as config from '~/common/config';
import * as utils from '~/common/utils';
import { CustomSnake, Movement, Snake } from '~/element/Snake';
import { GameMap } from '~/framework/GameMap';
import { Observer } from '~/framework/Observer';
import { io } from 'socket.io-client';
if (module && module.hot) {
    module.hot.accept([], () => {
        location.reload();
    });
}
const canvas = document.getElementById('cas');
let isInit = false;
// player id
let playerId;
let animationId;
// judge player is an observer or not
const isObserver = window.location.href.indexOf('observer=true') >= 0;
// window's width and height
const vWidth = window.innerWidth;
const vHeight = window.innerHeight;
// game map
export const gameMap = new GameMap(canvas, vWidth, vHeight);
// player object
let player;
// record mouse coord
const mouseCoords = {};
// snakes map
const snakes = new Map();
// save food object
const foods = [];
// websocket
const socket = io(`http://${process.env.LOCAL_IP || '127.0.0.1'}:${config.socketPort}`, {
    transports: ['websocket'], // Use WebSocket transport
});
// websocket connected
socket.on('connect', () => {
    // When the socket is connected
    sendData(config.CMD_INIT, utils.VIEW_TYPE, {
        width: vWidth,
        height: vHeight,
    });
});
socket.on('error', () => {
    console.log('error');
});
socket.on('disconnect', () => {
    if (isInit) {
        return;
    }
    const x = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
    const y = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
    initGame(x, y);
});
// receive data
socket.on('message', (data) => {
    let buf = data;
    if (buf instanceof ArrayBuffer) {
        buf = utils.decode(buf); // Assuming utils.decode is a function to process binary data
    }
    else {
        buf = JSON.parse(buf); // If it's JSON, parse it
    }
    let packet;
    switch (buf.opt) {
        case config.CMD_INIT_ACK:
            packet = data.data[0].packet;
            playerId = packet.id;
            initGame(packet.x, packet.y);
            break;
        case config.CMD_SYNC_OTHER_COORD:
            if (!isInit) {
                return;
            }
            let snake;
            buf.data.forEach((item) => {
                packet = item.packet;
                if (item.type === utils.SNAKE_TYPE) {
                    if (playerId === packet.id) {
                        return;
                    }
                    else if (snakes.has(packet.id)) {
                        snake = snakes.get(packet.id);
                        const movement = new Movement(packet.x, packet.y, packet.speed, packet.angle);
                        snake.sync(packet.size, packet.length, movement);
                    }
                    else {
                        snake = new CustomSnake({
                            x: packet.x,
                            y: packet.y,
                            angle: packet.angle,
                            size: packet.size,
                            length: packet.length,
                            fillColor: '#666',
                        });
                        snakes.set(packet.id, snake);
                    }
                }
                else if (item.type === utils.FOOD_TYPE) {
                    // sync food
                }
            });
            break;
        case config.CMD_LOSE_CONNECT:
            packet = buf.data[0].packet;
            if (snakes.has(packet.id)) {
                snakes.delete(packet.id);
            }
            break;
        default:
            break;
    }
});
/**
 * game init
 */
function initGame(x, y) {
    isInit = true;
    // create player
    if (isObserver) {
        player = new Observer(gameMap.width / 2, gameMap.height / 2);
    }
    else {
        player = new Snake({
            x, y,
            size: 30,
            length: 280,
            angle: Math.random() * 2 * Math.PI,
            fillColor: '#000',
        });
    }
    // for (let i = 0; i < 2000; i++) {
    //   const point = ~~(Math.random() * 30 + 50);
    //   const size = ~~(point / 3);
    //   foods.push(new Food({
    //     size, point,
    //     x: ~~(Math.random() * (gameMap.width - 2 * size) + size),
    //     y: ~~(Math.random() * (gameMap.height - 2 * size) + size),
    //   }));
    // }
    binding();
    animate();
}
/**
 * collision check
 */
function collision(dom, dom2, isRect) {
    const disX = dom.x - dom2.x;
    const disY = dom.y - dom2.y;
    const dw = dom.width + dom2.width;
    if (Math.abs(disX) > dw || Math.abs(disY) > dom.height + dom2.height) {
        return false;
    }
    return isRect ? true : (Math.hypot(disX, disY) < dw / 2);
}
// animation loop
let timeout = 0;
let time = +new Date();
function animate() {
    const newTime = +new Date();
    const snakePlayer = player instanceof Snake
        ? player
        : null;
    if (newTime - time > timeout) {
        time = newTime;
        // update map and player
        gameMap.update(player, () => {
            snakes.forEach((snake) => {
                snake.update();
            });
            player.update();
            if (snakePlayer) {
                foods.forEach((food) => {
                    food.update();
                    if (!food.visible || !collision(snakePlayer, food)) {
                        return;
                    }
                    const added = snakePlayer.eat(food);
                    foods.splice(foods.indexOf(food), 1);
                    // limit scale
                    const newScale = gameMap.scale + added / (snakePlayer.width * 4);
                    if (newScale < 1.4) {
                        gameMap.setToScale(newScale);
                    }
                });
            }
        });
        // if (mouseCoords.x) {
        //   gameMap.ctx.beginPath();
        //   gameMap.ctx.moveTo((<Snake>player).header.paintX, (<Snake>player).header.paintY);
        //   gameMap.ctx.lineTo(mouseCoords.x, mouseCoords.y);
        //   gameMap.ctx.stroke();
        // }
        if (snakePlayer && playerId) {
            sendData(config.CMD_SYNC_MAIN_COORD, utils.SNAKE_TYPE, {
                id: playerId,
                size: snakePlayer.width,
                speed: snakePlayer.speed,
                length: snakePlayer.length,
                x: snakePlayer.x,
                y: snakePlayer.y,
            });
        }
    }
    animationId = window.requestAnimationFrame(animate);
}
// send data
function sendData(opt, type, packet) {
    socket.emit('customEvent', {
        opt,
        data: { type, packet },
    });
}
/**
 * event binding
 */
function binding() {
    // finger|mouse move event
    function mousemove(e) {
        e.preventDefault();
        if (e.touches) {
            mouseCoords.x = e.touches[0].pageX;
            mouseCoords.y = e.touches[0].pageY;
        }
        else {
            const evt = e || window.event;
            mouseCoords.x = evt.clientX;
            mouseCoords.y = evt.clientY;
        }
        const nx = (mouseCoords.x + gameMap.view.x) * gameMap.scale;
        const ny = (mouseCoords.y + gameMap.view.y) * gameMap.scale;
        if (!isObserver) {
            player.moveTo(nx, ny);
        }
    }
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        window.addEventListener('touchstart', mousemove);
        window.addEventListener('touchmove', mousemove);
        if (player instanceof Observer) {
            window.addEventListener('touchend', () => {
                player.stop();
            });
        }
    }
    else {
        // change snake's direction when mouse moving
        window.addEventListener('mousemove', mousemove);
        if (player instanceof Snake) {
            const pl = player;
            // speed up
            window.addEventListener('mousedown', () => {
                pl.speedUp();
            });
            // speed down
            window.addEventListener('mouseup', () => {
                pl.speedDown();
            });
        }
        else {
            window.onmousedown = (e) => {
                let startX = e.pageX;
                let startY = e.pageY;
                window.onmousemove = (e) => {
                    const newStartX = e.pageX;
                    const newStartY = e.pageY;
                    const distanceX = newStartX - startX;
                    const distanceY = newStartY - startY;
                    player.x += -distanceX;
                    player.y += -distanceY;
                    startX = newStartX;
                    startY = newStartY;
                };
                window.onmouseup = () => {
                    window.onmousemove = null;
                };
            };
            window.addEventListener('keyup', (e) => {
                switch (e.keyCode) {
                    case 87 /* KeyCodes.W */:
                        gameMap.setToScale(gameMap.scale + 0.2);
                        break;
                    case 83 /* KeyCodes.S */:
                        gameMap.setToScale(gameMap.scale - 0.2);
                        break;
                    case 65 /* KeyCodes.A */:
                        gameMap.setToScale(1);
                        break;
                    case 38 /* KeyCodes.UP */:
                        timeout = timeout < 5 ? 0 : (timeout - 5);
                        break;
                    case 40 /* KeyCodes.DOWN */:
                        timeout += 5;
                        break;
                    default:
                        break;
                }
            });
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3dlYi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0QyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRTtRQUN6QixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFzQixDQUFDO0FBQ3RGLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztBQUU1QixZQUFZO0FBQ1osSUFBSSxRQUE0QixDQUFDO0FBQ2pDLElBQUksV0FBbUIsQ0FBQztBQUN4QixxQ0FBcUM7QUFDckMsTUFBTSxVQUFVLEdBQVksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUvRSw0QkFBNEI7QUFDNUIsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN6QyxNQUFNLE9BQU8sR0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBRTNDLFdBQVc7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