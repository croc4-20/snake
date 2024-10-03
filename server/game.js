"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
const tslib_1 = require("tslib");
const ws_1 = tslib_1.__importDefault(require("ws"));
const config = tslib_1.__importStar(require("../web/common/config"));
const utils = tslib_1.__importStar(require("../web/common/utils"));
const WebSocketServer = ws_1.default.Server;
let wss;
let gameLoop;
let stack = [];
let idKey = 0;
function startGameLoop() {
    clearInterval(gameLoop);
    // game loop
    gameLoop = setInterval(() => {
        if (!stack.length) {
            return;
        }
        broadcast(utils.encode({
            opt: config.CMD_SYNC_OTHER_COORD,
            data: stack,
        }));
        stack.length = 0;
    }, 100);
}
function startServer() {
    if (wss) {
        throw new Error('ws server are already created!');
    }
    wss = new WebSocketServer({ port: config.socketPort });
    console.log(`listen port ${config.socketPort}`);
    // start gameLoop
    startGameLoop();
    wss.on('connection', (ws) => {
        console.log('socket connected');
        ws.binaryType = 'arraybuffer';
        ws.elements = new Map();
        ws.on('error', () => {
            console.log('error');
        });
        ws.on('close', () => {
            console.log('disconnect!');
            if (!ws.playerId) {
                return;
            }
            broadcast(utils.encode({
                opt: config.CMD_LOSE_CONNECT,
                data: {
                    type: utils.SNAKE_TYPE,
                    packet: { id: ws.playerId },
                },
            }));
            wss.clients.forEach((client) => {
                if (client.elements.has(ws.playerId)) {
                    client.elements.delete(ws.playerId);
                }
            });
        });
        ws.on('message', (buf) => {
            const obj = utils.decode(buf);
            switch (obj.opt) {
                case config.CMD_INIT:
                    const packet = obj.data[0].packet;
                    ws.frameWidth = packet.width;
                    ws.frameHeight = packet.height;
                    ws.playerId = idKey++;
                    ws.name = obj.name;
                    // init response
                    ws.send(utils.encode({
                        opt: config.CMD_INIT_ACK,
                        data: {
                            type: utils.SNAKE_TYPE,
                            packet: {
                                id: ws.playerId,
                                x: ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2),
                                y: ~~(Math.random() * (config.MAP_HEIGHT - 100) + 100 / 2),
                            },
                        },
                    }));
                    break;
                case config.CMD_SYNC_MAIN_COORD:
                    stack = stack.concat(obj.data);
                    break;
                default:
                    break;
            }
        });
    });
}
function broadcast(data) {
    wss.clients.forEach((client) => {
        client.send(data);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE2QkEsa0NBK0VDOztBQTVHRCxvREFBMkI7QUFDM0IscUVBQStDO0FBQy9DLG1FQUE2QztBQUM3QyxNQUFNLGVBQWUsR0FBRyxZQUFTLENBQUMsTUFBTSxDQUFDO0FBQ3pDLElBQUksR0FBRyxDQUFDO0FBQ1IsSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFFZCxTQUFTLGFBQWE7SUFDcEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXhCLFlBQVk7SUFDWixRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsU0FBUyxDQUNQLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDWCxHQUFHLEVBQUUsTUFBTSxDQUFDLG9CQUFvQjtZQUNoQyxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FDSCxDQUFDO1FBRUYsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQWdCLFdBQVc7SUFDekIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUVoRCxpQkFBaUI7SUFDakIsYUFBYSxFQUFFLENBQUM7SUFFaEIsR0FB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