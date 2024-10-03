// import { Base } from './Base';
// import { Snake } from './Snake';

// export class Box extends Base {
//   public type: string;

//   constructor(x: number, y: number, type: string) {
//     super(x, y);
//     this.type = type; // The type of ability this box grants
//   }

//   // Method to check if the snake collides with the box
//   public isColliding(snakeX: number, snakeY: number): boolean {
//     return this.x === snakeX && this.y === snakeY;
//   }

//   // Apply the effect of the box to the snake
//   public applyEffect(snake: Snake, snakes: Snake[]): void {
//     switch (this.type) {
//       case 'speed':
//         snake.increaseSpeed();
//         break;
//       case 'growth':
//         snake.grow();
//         break;
//       case 'sizeAbsorber':
//         this.applySizeAbsorber(snake, snakes);
//         break;
//       // Add more cases as needed for different abilities
//     }
//   }

//   // Size Absorber effect: Absorb mass from nearby snakes
//   private applySizeAbsorber(snake: Snake, snakes: Snake[]): void {
//     const proximityRadius = 5; // Define the radius within which the effect works

//     snakes.forEach((otherSnake) => {
//       if (otherSnake !== snake && this.isWithinProximity(snake, otherSnake, proximityRadius)) {
//         const absorbedMass = Math.min(otherSnake.size * 0.1, 5); // Max absorb 10% or up to 5 units
//         snake.increaseSize(absorbedMass);
//         otherSnake.decreaseSize(absorbedMass);
//       }
//     });
//   }

//   // Check if another snake is within the proximity radius
//   private isWithinProximity(snake: Snake, otherSnake: Snake, radius: number): boolean {
//     const distance = Math.sqrt(Math.pow(snake.x - otherSnake.x, 2) + Math.pow(snake.y - otherSnake.y, 2));
//     return distance <= radius;
//   }
// }
