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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
