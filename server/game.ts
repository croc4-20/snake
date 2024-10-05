import { Server } from 'socket.io';
import * as config from '../web/common/config';
import * as utils from '../web/common/utils';
import http from 'http';

let io: Server;
let gameLoop: ReturnType<typeof setInterval>;
let stack: any[] = [];
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

function broadcast(data: any) {
  io.emit('broadcast', data); // Emit to all connected clients
}
