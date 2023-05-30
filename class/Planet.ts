import Rover from './Rover';

class Planet {
  size: number;
  constructor(size: number) {
    this.size = size;
  }

  moveRoverInPlanet(rover: Rover): void {
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
