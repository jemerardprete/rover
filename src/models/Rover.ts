import { Orientation } from "./Orientation.enum";

class Rover {
  x: number;
  y: number;
  orientation: Orientation;

  constructor(x: number, y: number, orientation: Orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  move(movement: string) {

    if(movement.toUpperCase() !== 'F' && movement.toUpperCase() !== 'B') {
      console.log('Mauvais mouvement');
      return;
    };

    switch(this.orientation) {
      case Orientation.North: {
        this.y = movement.toUpperCase() == 'F' ? ++this.y : --this.y;
        break;
      }
      case Orientation.South: {
        this.y = movement.toUpperCase() == 'F' ? --this.y : ++this.y;
        break;
      }
      case Orientation.East: {
        this.x = movement.toUpperCase() == 'F' ? ++this.x : --this.x;
        break;
      }
      case Orientation.West: {
        this.x = movement.toUpperCase() == 'F' ? --this.x : ++this.x;
        break;
      }
        
    }

    this.x = this.updatePosition(this.x);
    this.y = this.updatePosition(this.y);

    console.log('Le Rover se déplace');
  }

  private updatePosition(position: number) {
    if(position > 10) return 0;
    if(position < 0) return 10;
    return position
  }

  turn(direction: string) {
    if(direction.toUpperCase() !== 'L' && direction.toUpperCase() !== 'R') {
      console.log('Mauvaise direction');
      return;
    };

    switch(this.orientation) {
      case Orientation.North:
      case Orientation.South: {
        this.orientation = direction.toUpperCase() == 'L' ? Orientation.West : Orientation.East;
        break;
      }
      case Orientation.East: {
        this.orientation = direction.toUpperCase() == 'L' ? Orientation.North : Orientation.South;
        break;
      }
      case Orientation.West: {
        this.orientation = direction.toUpperCase() == 'L' ? Orientation.South : Orientation.North;
        break;
      }
        
    }

    console.log('Le Rover pivote');
  }

  getInformations() {
    console.log(`Le Rover se situe à ${this.x} en X, à ${this.y} en Y et est orienté au ${this.orientation}`)
  }
}

export let rover = new Rover(5, 5, Orientation.North);