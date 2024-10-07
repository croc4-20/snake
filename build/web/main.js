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
const socket = io(`http://${process.env.LOCAL_IP}:${config.socketPort}`, {
    transports: ['websocket'],
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