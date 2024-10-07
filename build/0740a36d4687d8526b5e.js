"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var socket = io("ws://".concat(window.location.host, "/socket.io/"), {
  transports: ['websocket']
});
console.log("socket in main.js in web folder", socket);

// websocket connected
socket.on('connect', function () {
  // When the socket is connected
  sendData(config.CMD_INIT, utils.VIEW_TYPE, {
    width: vWidth,
    height: vHeight
  });
});
socket.on('error', function () {
  console.log('error');
});
socket.on('disconnect', function () {
  if (isInit) {
    return;
  }
  var x = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
  var y = ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2);
  initGame(x, y);
});
// receive data
socket.on('message', function (data) {
  var buf = e.data;
  if (buf instanceof ArrayBuffer) {
    data = utils.decode(buf);
  } else {
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
      var snake;
      data.data.forEach(function (item) {
        packet = item.packet;
        if (item.type === utils.SNAKE_TYPE) {
          if (playerId === packet.id) {
            return;
          } else if (snakes.has(packet.id)) {
            snake = snakes.get(packet.id);
            var movement = new Snake_1.Movement(packet.x, packet.y, packet.speed, packet.angle);
            snake.sync(packet.size, packet.length, movement);
          } else {
            snake = new Snake_1.CustomSnake({
              x: packet.x,
              y: packet.y,
              angle: packet.angle,
              size: packet.size,
              length: packet.length,
              fillColor: '#666'
            });
            snakes.set(packet.id, snake);
          }
        } else if (item.type === utils.FOOD_TYPE) {
          // sync food
        }
      });
      break;
    case config.CMD_LOSE_CONNECT:
      packet = data.data[0].packet;
      if (snakes.has(packet.id)) {
        snakes["delete"](packet.id);
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
  } else {
    player = new Snake_1.Snake({
      x: x,
      y: y,
      size: 30,
      length: 280,
      angle: Math.random() * 2 * Math.PI,
      fillColor: '#000'
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
  return isRect ? true : Math.hypot(disX, disY) < dw / 2;
}
// animation loop
var timeout = 0;
var time = +new Date();
function animate() {
  var newTime = +new Date();
  var snakePlayer = player instanceof Snake_1.Snake ? player : null;
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
        y: snakePlayer.y
      });
    }
  }
  animationId = window.requestAnimationFrame(animate);
}
// send data
function sendData(opt, type, packet) {
  ws.send(utils.encode({
    opt: opt,
    data: {
      type: type,
      packet: packet
    }
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
    } else {
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
  } else {
    // change snake's direction when mouse moving
    window.addEventListener('mousemove', mousemove);
    if (player instanceof Snake_1.Snake) {
      var pl = player;
      // speed up
      window.addEventListener('mousedown', function () {
        pl.speedUp();
      });
      // speed down
      window.addEventListener('mouseup', function () {
        pl.speedDown();
      });
    } else {
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
            timeout = timeout < 5 ? 0 : timeout - 5;
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