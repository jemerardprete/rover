import Position from './Position';
import Direction from './Direction';

class Rover {
  position: Position;
  direction: Direction;
  constructor(position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
  }

  moveForward(): void {
    switch (this.direction.direction) {
      case 'N':
        this.position.y = this.position.y + 1;
        break;
      case 'S':
        this.position.y = this.position.y - 1;
        break;
      case 'E':
        this.position.x = this.position.x + 1;
        break;
      case 'W':
        this.position.x = this.position.x - 1;
        break;
      default:
        throw new Error('Invalid direction');
    }
  }

  moveBackward(): void {
    switch (this.direction.direction) {
      case 'N':
        this.position.y = this.position.y - 1;
        break;
      case 'S':
        this.position.y = this.position.y + 1;
        break;
      case 'E':
        this.position.x = this.position.x - 1;
        break;
      case 'W':
        this.position.x = this.position.x + 1;
        break;
      default:
        throw new Error('Invalid direction');
    }
  }

  turnLeft(): void {
    this.direction = this.direction.turnLeft();
  }

  turnRight(): void {
    this.direction = this.direction.turnRight();
  }

  toString(): string {
    return `position : ${this.position.toString()} \ndirection: ${this.direction.toString()}`;
  }
}

export default Rover;
