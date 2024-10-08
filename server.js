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
// Handler for CMD_INIT
function handleInit(socket, packet) {
  // Assign a unique player ID (using socket ID)
  const playerId = socket.id;

  // Initialize player data
  const playerData = {
    id: playerId,
    x: Math.random() * config.MAP_WIDTH,
    y: Math.random() * config.MAP_HEIGHT,
    size: 30,      // Initial size
    length: 280,   // Initial length
    angle: Math.random() * 2 * Math.PI,
    speed: 0,      // Initial speed
  };

  // Store player data in the game state
  gameState.players.set(playerId, playerData);

  // Send initialization acknowledgment to the client
  socket.emit('customEvent', {
    opt: config.CMD_INIT_ACK,
    data: {
      type: 'initAck',
      packet: {
        id: playerId,
        x: playerData.x,
        y: playerData.y,
        foodItems: gameState.foodItems, // Send initial food items
      },
    },
  });

  console.log(`Player ${playerId} initialized at (${playerData.x}, ${playerData.y})`);
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
  const indexPath = path.join(__dirname, 'build', 'index.html');
  res.sendFile(indexPath, {
    headers: {
      'Cache-Control': 'no-cache',  // Ensure index.html is not cached
    },
  });
});


// Serve Slither game static files
// app.use('/miniGames/slitherSnake/slither/dist', express.static(path.join(__dirname, 'miniGames/slitherSnake/slither/dist')));
let gameState = {
  foodItems: [],
  players: new Map(), // Track players by their socket IDs
};
 const config = {
  MAP_WIDTH: 2000,
  MAP_HEIGHT: 2000,
  CMD_INIT: 100,
  CMD_INIT_ACK: 101,
  CMD_SYNC_MAIN_COORD: 102,
  CMD_SYNC_OTHER_COORD: 103,
  CMD_LOSE_CONNECT: 104,
};
function generateFoodItems() {
  for (let i = 0; i < 2000; i++) {
    const size = Math.floor(Math.random() * 30 + 20);
    const x = Math.floor(Math.random() * (config.MAP_WIDTH - size * 2) + size);
    const y = Math.floor(Math.random() * (config.MAP_HEIGHT - size * 2) + size);
    gameState.foodItems.push({ x, y, size });
  }
}

// Start the game loop for broadcasting game state updates
function startGameLoop() {
  setInterval(() => {
    // Collect data to send to clients
    const dataToSend = {
      foodItems: gameState.foodItems,
      players: Array.from(gameState.players.values()), // Send player data
    };

    // Broadcast the game state to all connected clients
    io.emit('gameUpdate', dataToSend);
  }, 100); // Update interval (e.g., every 100ms)
}
startGameLoop();
generateFoodItems();

// Socket.IO connection handling
  io.on('connection', (socket) => {
    // Start the game loop

  console.log('A user connected:', socket.id);

  socket.on('customEvent', (data) => {

    const { opt, data: { type, packet } } = data;
   
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
        case config.CMD_LOSE_CONNECT:
      if (snakes.has(packet.id)) {
        snakes.delete(packet.id);
      }
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
  socket.on('gameUpdate', (data) => {
  // Update food items
    let foods = [];
  foods.length = 0; // Clear existing food items
  data.foodItems.forEach((item) => {
    const food = new Food({
      x: item.x,
      y: item.y,
      size: item.size,
      // ... other properties ...
    });
    foods.push(food);
  });

  // Update other players
  data.players.forEach((playerData) => {
    if (playerData.id !== playerId) {
      if (snakes.has(playerData.id)) {
        // Update existing snake
        const snake = snakes.get(playerData.id);
        const movement = new Movement(playerData.x, playerData.y, playerData.speed, playerData.angle);
        snake.sync(playerData.size, playerData.length, movement);
      } else {
        // Create new snake
        const snake = new CustomSnake({
          x: playerData.x,
          y: playerData.y,
          angle: playerData.angle,
          size: playerData.size,
          length: playerData.length,
          fillColor: '#666',
        });
        snakes.set(playerData.id, snake);
      }
    }
  });
});

  // Handle Slither game events
  socket.on('slitherEvent', (data) => {
    // Process Slither game data
    socket.broadcast.emit('slitherUpdate', data);
  });

   socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    handleDisconnect(socket);
  });
});
// function handleInit(socket, packet) {
//   // Assign a unique player ID (using socket ID)
//   const playerId = socket.id;

//   // Initialize player data
//   const playerData = {
//     id: playerId,
//     x: Math.random() * config.MAP_WIDTH,
//     y: Math.random() * config.MAP_HEIGHT,
//     size: 30,      // Initial size
//     length: 280,   // Initial length
//     angle: Math.random() * 2 * Math.PI,
//     speed: 0,      // Initial speed
//   };

//   // Store player data in the game state
//   gameState.players.set(playerId, playerData);

//   // Send initialization acknowledgment to the client
//   socket.emit('customEvent', {
//     opt: config.CMD_INIT_ACK,
//     data: {
//       type: 'initAck',
//       packet: {
//         id: playerId,
//         x: playerData.x,
//         y: playerData.y,
//         foodItems: gameState.foodItems, // Send initial food items
//       },
//     },
//   });

//   console.log(`Player ${playerId} initialized at (${playerData.x}, ${playerData.y})`);
// }

// Handler for CMD_SYNC_MAIN_COORD
function handleSyncMainCoord(socket, packet) {
  const playerId = socket.id;

  if (gameState.players.has(playerId)) {
    // Update player's position and state
    const playerData = gameState.players.get(playerId);
    playerData.x = packet.x;
    playerData.y = packet.y;
    playerData.size = packet.size;
    playerData.length = packet.length;
    playerData.speed = packet.speed;
    playerData.angle = packet.angle;

    // Update the player data in the game state
    gameState.players.set(playerId, playerData);
  } else {
    console.warn(`Received CMD_SYNC_MAIN_COORD for unknown player ${playerId}`);
  }
}

// Handler for CMD_LOSE_CONNECT
function handleLoseConnect(socket, packet) {
  const playerId = socket.id;

  // Remove the player from the game state
  if (gameState.players.has(playerId)) {
    gameState.players.delete(playerId);
    console.log(`Player ${playerId} removed from game state`);
  }
}

// Handler for client disconnection
function handleDisconnect(socket) {
  const playerId = socket.id;

  // Remove the player from the game state
  if (gameState.players.has(playerId)) {
    gameState.players.delete(playerId);
    console.log(`Player ${playerId} disconnected and removed from game state`);
  }

  // Notify other clients about the disconnection
  io.emit('customEvent', {
    opt: config.CMD_LOSE_CONNECT,
    data: {
      type: 'playerDisconnect',
      packet: { id: playerId },
    },
  });
}




const PORT = process.env.PORT || 3000;
console.log('Port found :', PORT);
if (!PORT) {
  throw new Error('No PORT environment variable found');
}

server.listen(PORT, () => 
{
  console.log(`Server is running on port ${PORT}`);
});