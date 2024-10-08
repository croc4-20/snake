// server.js
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve main application
function handleInit(socket, packet) {
  // Example logic for initialization
  console.log('Handling CMD_INIT with packet:', packet);

  // You can also emit an acknowledgment back to the client if needed
  socket.emit('customEventAck', { message: 'Initialization complete', packet });
}
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1y',  // Cache static assets for one year
  immutable: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache');  // Prevent caching of index.html
    }
  },
}));



// Serve index.html only for routes that don't match a file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), {
    headers: {
      'Cache-Control': 'no-cache',  // Ensure index.html is not cached
    },
  });
});



// Serve Slither game static files
// app.use('/miniGames/slitherSnake/slither/dist', express.static(path.join(__dirname, 'miniGames/slitherSnake/slither/dist')));

// Socket.IO connection handling
  io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('customEvent', (data) => {
    const { opt, data: { type, packet } } = data;
    const config = {
      CMD_INIT: 100,
      CMD_INIT_ACK: 101,
      CMD_SYNC_MAIN_COORD: 102,
      CMD_SYNC_OTHER_COORD: 103,
      CMD_LOSE_CONNECT: 104
    };
    // Log the received data
    console.log('Received event:', { opt, type, packet });

    // Handle different commands based on 'opt'
    switch (opt) {
      case config.CMD_INIT:  // Handle CMD_INIT (100)
        console.log('CMD_INIT received');
        // Handle init command (you can add your initialization logic here)
        handleInit(socket, packet);  // Add an appropriate handler if necessary
        break;

      case config.CMD_INIT_ACK:
        console.log('CMD_INIT_ACK received');
        handleInitAck(socket, packet);
        break;

      case config.CMD_SYNC_MAIN_COORD:
        console.log('CMD_SYNC_MAIN_COORD received');
        handleSyncMainCoord(socket, packet);
        break;

      case config.CMD_SYNC_OTHER_COORD:
        console.log('CMD_SYNC_OTHER_COORD received');
        handleSyncOtherCoord(socket, packet);
        break;

      case config.CMD_LOSE_CONNECT:
        console.log('CMD_LOSE_CONNECT received');
        handleLoseConnect(socket, packet);
        break;

      default:
        console.log('Unknown command received:', opt);
        break;
    }
  });

  // Handle Slither game events
  socket.on('slitherEvent', (data) => {
    // Process Slither game data
    socket.broadcast.emit('slitherUpdate', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// app.get('/miniGames/slitherSnake/slither/web/index.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// Fallback route for the SPA


const PORT = process.env.PORT || 3000;
console.log('Port found :', PORT);
if (!PORT) {
  throw new Error('No PORT environment variable found');
}

server.listen(PORT, () => 
{
  console.log(`Server is running on port ${PORT}`);
});