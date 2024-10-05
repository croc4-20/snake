import { Server } from 'socket.io';
import * as config from '../web/common/config';
import * as utils from '../web/common/utils';
import http from 'http';
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
export function startServer() {
    const server = http.createServer();
    io = new Server(server, { cors: { origin: '*' } }); // Allow CORS
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxLQUFLLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEtBQUssS0FBSyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUV4QixJQUFJLEVBQVUsQ0FBQztBQUNmLElBQUksUUFBd0MsQ0FBQztBQUM3QyxJQUFJLEtBQUssR0FBVSxFQUFFLENBQUM7QUFDdEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBRWQsU0FBUyxhQUFhO0lBQ3BCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV4QixZQUFZO0lBQ1osUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixPQUFPO1FBQ1QsQ0FBQztRQUVELDJCQUEyQjtRQUMzQixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixHQUFHLEVBQUUsTUFBTSxDQUFDLG9CQUFvQjtZQUNoQyxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhO0lBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUMs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