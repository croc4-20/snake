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
app.use(express.static(path.join(__dirname, 'dist')));

// Serve Slither game static files
app.use('/miniGames/slitherSnake/slither/dist', express.static(path.join(__dirname, 'miniGames/slitherSnake/slither/dist')));

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('customEvent', (data) => {
    const { opt, data: { type, packet } } = data;

    // Log the received data
    console.log('Received event:', { opt, type, packet });

    // Handle different commands based on 'opt'
    switch (opt) {
      case config.CMD_INIT_ACK:
        console.log('CMD_INIT_ACK received');
        // Handle the init acknowledgement
        handleInitAck(socket, packet);
        break;

      case config.CMD_SYNC_MAIN_COORD:
        console.log('CMD_SYNC_MAIN_COORD received');
        // Handle the main coordinates synchronization
        handleSyncMainCoord(socket, packet);
        break;

      case config.CMD_SYNC_OTHER_COORD:
        console.log('CMD_SYNC_OTHER_COORD received');
        // Handle the other coordinates synchronization
        handleSyncOtherCoord(socket, packet);
        break;

      case config.CMD_LOSE_CONNECT:
        console.log('CMD_LOSE_CONNECT received');
        // Handle the lost connection scenario
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

// Route for Slither game's index.html
app.get('/miniGames/slitherSnake/slither/web/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'miniGames/slitherSnake/slither/dist', 'index.html'));
});

// Fallback route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

cconst PORT = process.env.PORT; 
if (!PORT) {
  throw new Error('No PORT environment variable found');
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});