"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
const tslib_1 = require("tslib");
const socket_io_1 = require("socket.io");
const config = tslib_1.__importStar(require("../web/common/config"));
const utils = tslib_1.__importStar(require("../web/common/utils"));
const http_1 = tslib_1.__importDefault(require("http"));
let io;
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
        // broadcast to all clients
        io.emit('sync-coord', {
            opt: config.CMD_SYNC_OTHER_COORD,
            data: stack,
        });
        stack.length = 0;
    }, 100);
}
function startServer() {
    const server = http_1.default.createServer();
    io = new socket_io_1.Server(server, { cors: { origin: '*' } }); // Allow CORS
    console.log(`Server is listening on port ${config.socketPort}`);
    // Start game loop
    startGameLoop();
    // Set up connection event
    io.on('connection', (socket) => {
        console.log('Socket connected:', socket.id);
        socket.data.elements = new Map();
        socket.on('disconnect', () => {
            console.log('Socket disconnected:', socket.id);
            if (!socket.data.playerId) {
                return;
            }
            // Inform all clients about the disconnection
            io.emit('lose-connect', {
                opt: config.CMD_LOSE_CONNECT,
                data: {
                    type: utils.SNAKE_TYPE,
                    packet: { id: socket.data.playerId },
                },
            });
            // Remove the player from all clients
            io.sockets.sockets.forEach((client) => {
                if (client.data.elements.has(socket.data.playerId)) {
                    client.data.elements.delete(socket.data.playerId);
                }
            });
        });
        socket.on('message', (buf) => {
            const obj = utils.decode(buf);
            switch (obj.opt) {
                case config.CMD_INIT:
                    const packet = obj.data[0].packet;
                    socket.data.frameWidth = packet.width;
                    socket.data.frameHeight = packet.height;
                    socket.data.playerId = idKey++;
                    socket.data.name = obj.name;
                    // Send init response to the client
                    socket.emit('init-ack', {
                        opt: config.CMD_INIT_ACK,
                        data: {
                            type: utils.SNAKE_TYPE,
                            packet: {
                                id: socket.data.playerId,
                                x: ~~(Math.random() * (config.MAP_WIDTH - 100) + 100 / 2),
                                y: ~~(Math.random() * (config.MAP_HEIGHT - 100) + 100 / 2),
                            },
                        },
                    });
                    break;
                case config.CMD_SYNC_MAIN_COORD:
                    stack = stack.concat(obj.data);
                    break;
                default:
                    break;
            }
        });
    });
    // Start server
    server.listen(config.socketPort, () => {
        console.log(`Socket.IO server running on port ${config.socketPort}`);
    });
}
function broadcast(data) {
    io.emit('broadcast', data); // Emit to all connected clients
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE2QkEsa0NBNEVDOztBQXpHRCx5Q0FBbUM7QUFDbkMscUVBQStDO0FBQy9DLG1FQUE2QztBQUM3Qyx3REFBd0I7QUFFeEIsSUFBSSxFQUFVLENBQUM7QUFDZixJQUFJLFFBQXNCLENBQUM7QUFDM0IsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDO0FBQ3RCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUVkLFNBQVMsYUFBYTtJQUNwQixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsWUFBWTtJQUNaLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsT0FBTztRQUNULENBQUM7UUFFRCwyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0I7WUFDaEMsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDVixDQUFDO0FBRUQsU0FBZ0IsV0FBVztJQUN6QixNQUFNLE1BQU0sR0FBRyxjQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsRUFBRSxHQUFHLElBQUksa0JBQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYTtJQUVqRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUVoRSxrQkFBa0I7SUFDbEIsYUFBYSxFQUFFLENBQUM7SUFFaEIsMEJBQTBCO0lBQzFCLEVBQUUs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