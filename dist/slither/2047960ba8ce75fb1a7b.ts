"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameMap = void 0;
var tslib_1 = require("tslib");
require("es6-shim");
var config = tslib_1.__importStar(require("~/common/config"));
var utils = tslib_1.__importStar(require("~/common/utils"));
var Snake_1 = require("~/element/Snake");
var GameMap_1 = require("~/framework/GameMap");
var Observer_1 = require("~/framework/Observer");
if (module && module.hot) {
    module.hot.accept(function () {
        location.reload();
    });
}
var canvas = document.getElementById('cas');
var isInit = false;
// player id
var playerId;
var animationId;
// judge player is an observer or not
var isObserver = window.location.href.indexOf('observer=true') >= 0;
// window's width and height
var vWidth = window.innerWidth;
var vHeight = window.innerHeight;
// game map
exports.gameMap = new GameMap_1.GameMap(canvas, vWidth, vHeight);
// player object
var player;
// record mouse coord
var mouseCoords = {};
// snakes map
var snakes = new Map();
// save food object
var foods = [];
// websocket
var ws = new WebSocket("ws://".concat(process.env.LOCAL_IP || '127.0.0.1', ":").concat(config.socketPort));
ws.binaryType = 'arraybuffer';
// websocket connected
ws.onopen = function () {
    sendData(config.CMD_INIT, utils.VIEW_TYPE, {
        width: vWidth,
        height: vHeight,
    });
};
ws.onerror = function () {
    console.log('error');
};
ws.onclose = function () {
    if (isInit) {
        return;
    }
    var x = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
    var y = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
    initGame(x, y);
};
// receive data
ws.onmessage = function (e) {
    var data;
    var buf = e.data;
    if (buf instanceof ArrayBuffer) {
        data = utils.decode(buf);
    }
    else {
        data = JSON.parse(buf);
    }
    var packet;
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
            var snake_1;
            data.data.forEach(function (item) {
                packet = item.packet;
                if (item.type === utils.SNAKE_TYPE) {
                    if (playerId === packet.id) {
                        return;
                    }
                    else if (snakes.has(packet.id)) {
                        snake_1 = snakes.get(packet.id);
                        var movement = new Snake_1.Movement(packet.x, packet.y, packet.speed, packet.angle);
                        snake_1.sync(packet.size, packet.length, movement);
                    }
                    else {
                        snake_1 = new Snake_1.CustomSnake({
                            x: packet.x,
                            y: packet.y,
                            angle: packet.angle,
                            size: packet.size,
                            length: packet.length,
                            fillColor: '#666',
                        });
                        snakes.set(packet.id, snake_1);
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
        player = new Observer_1.Observer(exports.gameMap.width / 2, exports.gameMap.height / 2);
    }
    else {
        player = new Snake_1.Snake({
            x: x,
            y: y,
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
    var disX = dom.x - dom2.x;
    var disY = dom.y - dom2.y;
    var dw = dom.width + dom2.width;
    if (Math.abs(disX) > dw || Math.abs(disY) > dom.height + dom2.height) {
        return false;
    }
    return isRect ? true : (Math.hypot(disX, disY) < dw / 2);
}
// animation loop
var timeout = 0;
var time = +new Date();
function animate() {
    var newTime = +new Date();
    var snakePlayer = player instanceof Snake_1.Snake
        ? player
        : null;
    if (newTime - time > timeout) {
        time = newTime;
        // update map and player
        exports.gameMap.update(player, function () {
            snakes.forEach(function (snake) {
                snake.update();
            });
            player.update();
            if (snakePlayer) {
                foods.forEach(function (food) {
                    food.update();
                    if (!food.visible || !collision(snakePlayer, food)) {
                        return;
                    }
                    var added = snakePlayer.eat(food);
                    foods.splice(foods.indexOf(food), 1);
                    // limit scale
                    var newScale = exports.gameMap.scale + added / (snakePlayer.width * 4);
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
        opt: opt,
        data: { type: type, packet: packet },
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
            var evt = e || window.event;
            mouseCoords.x = evt.clientX;
            mouseCoords.y = evt.clientY;
        }
        var nx = (mouseCoords.x + exports.gameMap.view.x) * exports.gameMap.scale;
        var ny = (mouseCoords.y + exports.gameMap.view.y) * exports.gameMap.scale;
        if (!isObserver) {
            player.moveTo(nx, ny);
        }
    }
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        window.addEventListener('touchstart', mousemove);
        window.addEventListener('touchmove', mousemove);
        if (player instanceof Observer_1.Observer) {
            window.addEventListener('touchend', function () {
                player.stop();
            });
        }
    }
    else {
        // change snake's direction when mouse moving
        window.addEventListener('mousemove', mousemove);
        if (player instanceof Snake_1.Snake) {
            var pl_1 = player;
            // speed up
            window.addEventListener('mousedown', function () {
                pl_1.speedUp();
            });
            // speed down
            window.addEventListener('mouseup', function () {
                pl_1.speedDown();
            });
        }
        else {
            window.onmousedown = function (e) {
                var startX = e.pageX;
                var startY = e.pageY;
                window.onmousemove = function (e) {
                    var newStartX = e.pageX;
                    var newStartY = e.pageY;
                    var distanceX = newStartX - startX;
                    var distanceY = newStartY - startY;
                    player.x += -distanceX;
                    player.y += -distanceY;
                    startX = newStartX;
                    startY = newStartY;
                };
                window.onmouseup = function () {
                    window.onmousemove = null;
                };
            };
            window.addEventListener('keyup', function (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9CQUFrQjtBQUNsQiw4REFBMEM7QUFDMUMsNERBQXdDO0FBR3hDLHlDQUErRDtBQUMvRCwrQ0FBOEM7QUFDOUMsaURBQWdEO0FBRWhELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNoQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsSUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFzQixDQUFDO0FBQ3RGLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztBQUU1QixZQUFZO0FBQ1osSUFBSSxRQUE0QixDQUFDO0FBQ2pDLElBQUksV0FBbUIsQ0FBQztBQUN4QixxQ0FBcUM7QUFDckMsSUFBTSxVQUFVLEdBQVksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUvRSw0QkFBNEI7QUFDNUIsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN6QyxJQUFNLE9BQU8sR0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBRTNDLFdBQVc7QUFDRSxRQUFBLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVyRSxnQkFBZ0I7QUFDaEIsSUFBSSxNQUF3QixDQUFDO0FBRTdCLHFCQUFxQjtBQUNyQixJQUFNLFdBQVcsR0FBK0IsRUFBRSxDQUFDO0FBRW5ELGFBQWE7QUFDYixJQUFNLE1BQU0sR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQWFoRCxtQkFBbUI7QUFDbkIsSUFBTSxLQUFLLEdBQVcs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