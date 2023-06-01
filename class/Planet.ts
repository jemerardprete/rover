import Rover from './Rover';
import Position from './Position';

class Planet {
  size: number;
  obstacles: Position[] = [];
  constructor(size: number) {
    this.size = size;
    this.generateObstacles();
  }

  moveRoverInPlanet(rover: Rover): void {
    this.warpRover(rover);
  }

  isInObstacle(rover: Rover): boolean {
    return this.obstacles.some((obstacle) => {
      return obstacle.x === rover.position.x && obstacle.y === rover.position.y;
    });
  }

  generateObstacles(): void {
    for (let i = 0; i < this.size / 5; i++) {
      const x = Math.floor(Math.random() * this.size);
      const y = Math.floor(Math.random() * this.size);
      this.obstacles.push(new Position(x, y));
    }
  }

  warpRover(rover: Rover): void {
    if (rover.position.x < 0) {
      rover.position.x = this.size - 1;
    } else if (rover.position.x >= this.size) {
      rover.position.x = 0;
    }

    if (rover.position.y < 0) {
      rover.position.y = this.size - 1;
    } else if (rover.position.y >= this.size) {
      rover.position.y = 0;
    }
  }
}

export default Planet;
