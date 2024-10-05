import 'es6-shim';
import * as config from '~/common/config';
import * as utils from '~/common/utils';
import { CustomSnake, Movement, Snake } from '~/element/Snake';
import { GameMap } from '~/framework/GameMap';
import { Observer } from '~/framework/Observer';
if (module && module.hot) {
    module.hot.accept(() => {
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
const ws = new WebSocket(`ws://${process.env.LOCAL_IP || '127.0.0.1'}:${config.socketPort}`);
ws.binaryType = 'arraybuffer';
// websocket connected
ws.onopen = () => {
    sendData(config.CMD_INIT, utils.VIEW_TYPE, {
        width: vWidth,
        height: vHeight,
    });
};
ws.onerror = () => {
    console.log('error');
};
ws.onclose = () => {
    if (isInit) {
        return;
    }
    const x = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
    const y = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
    initGame(x, y);
};
// receive data
ws.onmessage = (e) => {
    let data;
    const buf = e.data;
    if (buf instanceof ArrayBuffer) {
        data = utils.decode(buf);
    }
    else {
        data = JSON.parse(buf);
    }
    let packet;
    switch (data.opt) {
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
            data.data.forEach((item) => {
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
            packet = data.data[0].packet;
            if (snakes.has(packet.id)) {
                snakes.delete(packet.id);
            }
            break;
        default:
            break;
    }
};
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
    ws.send(utils.encode({
        opt,
        data: { type, packet },
    }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLENBQUM7QUFDbEIsT0FBTyxLQUFLLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEtBQUssS0FBSyxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNyQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFzQixDQUFDO0FBQ3RGLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztBQUU1QixZQUFZO0FBQ1osSUFBSSxRQUE0QixDQUFDO0FBQ2pDLElBQUksV0FBbUIsQ0FBQztBQUN4QixxQ0FBcUM7QUFDckMsTUFBTSxVQUFVLEdBQVksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUvRSw0QkFBNEI7QUFDNUIsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN6QyxNQUFNLE9BQU8sR0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBRTNDLFdBQVc7QUFDWCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQVksSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLE1B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