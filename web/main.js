"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameMap = void 0;
const tslib_1 = require("tslib");
require("es6-shim");
const config = tslib_1.__importStar(require("~/common/config"));
const utils = tslib_1.__importStar(require("~/common/utils"));
const Snake_1 = require("~/element/Snake");
const GameMap_1 = require("~/framework/GameMap");
const Observer_1 = require("~/framework/Observer");
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
exports.gameMap = new GameMap_1.GameMap(canvas, vWidth, vHeight);
// player object
let player;
// record mouse coord
const mouseCoords = {};
// snakes map
const snakes = new Map();
// save food object
const foods = [];
// websocket
const socket = io(`http://${window.location.hostname}:${window.location.port}`, {
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
socket.on('message', (data) => 
{
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
                        const movement = new Snake_1.Movement(packet.x, packet.y, packet.speed, packet.angle);
                        snake.sync(packet.size, packet.length, movement);
                    }
                    else {
                        snake = new Snake_1.CustomSnake({
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
});
/**
 * game init
 */
function initGame(x, y) {
    isInit = true;
    // create player
    if (isObserver) {
        player = new Observer_1.Observer(exports.gameMap.width / 2, exports.gameMap.height / 2);
    }
    else {
        player = new Snake_1.Snake({
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
    const snakePlayer = player instanceof Snake_1.Snake
        ? player
        : null;
    if (newTime - time > timeout) {
        time = newTime;
        // update map and player
        exports.gameMap.update(player, () => {
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
                    const newScale = exports.gameMap.scale + added / (snakePlayer.width * 4);
                    if (newScale < 1.4) {
                        exports.gameMap.setToScale(newScale);
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
        const nx = (mouseCoords.x + exports.gameMap.view.x) * exports.gameMap.scale;
        const ny = (mouseCoords.y + exports.gameMap.view.y) * exports.gameMap.scale;
        if (!isObserver) {
            player.moveTo(nx, ny);
        }
    }
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        window.addEventListener('touchstart', mousemove);
        window.addEventListener('touchmove', mousemove);
        if (player instanceof Observer_1.Observer) {
            window.addEventListener('touchend', () => {
                player.stop();
            });
        }
    }
    else {
        // change snake's direction when mouse moving
        window.addEventListener('mousemove', mousemove);
        if (player instanceof Snake_1.Snake) {
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
                        exports.gameMap.setToScale(exports.gameMap.scale + 0.2);
                        break;
                    case 83 /* KeyCodes.S */:
                        exports.gameMap.setToScale(exports.gameMap.scale - 0.2);
                        break;
                    case 65 /* KeyCodes.A */:
                        exports.gameMap.setToScale(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9CQUFrQjtBQUNsQixnRUFBMEM7QUFDMUMsOERBQXdDO0FBR3hDLDJDQUErRDtBQUMvRCxpREFBOEM7QUFDOUMsbURBQWdEO0FBRWhELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDckIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBc0IsQ0FBQztBQUN0RixJQUFJLE1BQU0sR0FBWSxLQUFLLENBQUM7QUFFNUIsWUFBWTtBQUNaLElBQUksUUFBNEIsQ0FBQztBQUNqQyxJQUFJLFdBQW1CLENBQUM7QUFDeEIscUNBQXFDO0FBQ3JDLE1BQU0sVUFBVSxHQUFZLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFL0UsNEJBQTRCO0FBQzVCLE1BQU0sTUFBTSxHQUFXLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDekMsTUFBTSxPQUFPLEdBQVcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUUzQyxXQUFXO0FBQ0UsUUFBQSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFckUsZ0JBQWdCO0FBQ2hCLElBQUksTUFBd0IsQ0FBQztBQUU3QixxQkFBcUI7QUFDckIsTUFBTSxXQUFXLEdBQStCLEVBQUUsQ0FBQztBQUVuRCxhQUFhO0FBQ2IsTUFBTSxNQUFNLEdBQTBCLElBQUksR0FBRyxFQUFFLENBQUM7QUFhaEQsbUJBQW1CO0FBQ25CLE1BQU0s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