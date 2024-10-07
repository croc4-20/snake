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


app.use('/build', express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  if (req.url.endsWith('.ts')) {
    console.log('file ends with ts, serving js');
    res.setHeader('Content-Type', 'application/javascript');
  }
  console.log(`Serving request for ${req.url}`);
  next();
});
app.get('/build/*', (req, res) => {
  const requestedFile = path.join(__dirname, req.path);
  console.log(`Serving specific file: ${requestedFile}`);
  res.sendFile(requestedFile);
});

// Serve index.html only for routes that don't match a file
app.get('*', (req, res, next) => {
  if (req.url.endsWith('.js')) {
    next(); // Let the static middleware handle it
  } else {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});



// Serve Slither game static files
// app.use('/miniGames/slitherSnake/slither/dist', express.static(path.join(__dirname, 'miniGames/slitherSnake/slither/dist')));

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('customEvent', (data) => {
    const { opt, data: { type, packet } } = data;
    const config = {
      CMD_INIT_ACK: 'CMD_INIT_ACK',
      CMD_SYNC_MAIN_COORD: 'CMD_SYNC_MAIN_COORD',
      CMD_SYNC_OTHER_COORD: 'CMD_SYNC_OTHER_COORD',
      CMD_LOSE_CONNECT: 'CMD_LOSE_CONNECT'
    };
    // Log the received data
    console.log('Received event:', { opt, type, packet });

    // Handle different commands based on 'opt'
    switch (opt) {
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

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});