import { Orientation } from "./Orientation.enum";
import Position from "./Position";
import { Mars, Jupiter, Planet } from "./Planet";

class Rover {
  position: Position;
  orientation: Orientation;
  planet: Planet;
  hasObstacle: boolean = false;

  constructor(position: Position, orientation: Orientation, planet: Planet) {
    this.position = position;
    this.orientation = orientation;
    this.planet = planet;
  }

  generateAction(listActions: string) {
    for (let i = 0; i < listActions.length; i++) {
      const character = listActions.charAt(i);
      if (!['F', 'B', 'L', 'R'].includes(character))
        continue;
      (character == 'F' || character == 'B') ? rover.move(character) : rover.turn(character);
      if(this.hasObstacle) {
        console.log('Il y a un obstacle');
        return;
      }
    }
  }

  checkHasObstacle() {
    this.hasObstacle = this.planet.obstacles.some(obs => obs.x === this.position.x && obs.y === this.position.y);
    return this.hasObstacle;
  }

  move(movement: string) {

    if (movement.toUpperCase() !== 'F' && movement.toUpperCase() !== 'B') {
      console.log('Mauvais mouvement');
      return;
    };

    const oldPosition = {... this.position};

    switch (this.orientation) {
      case Orientation.North: {
        this.position.y = movement.toUpperCase() == 'F' ? ++this.position.y : --this.position.y;
        break;
      }
      case Orientation.South: {
        this.position.y = movement.toUpperCase() == 'F' ? --this.position.y : ++this.position.y;
        break;
      }
      case Orientation.East: {
        this.position.x = movement.toUpperCase() == 'F' ? ++this.position.x : --this.position.x;
        break;
      }
      case Orientation.West: {
        this.position.x = movement.toUpperCase() == 'F' ? --this.position.x : ++this.position.x;
        break;
      }

    }

    this.position = this.checkHasObstacle() ? oldPosition : this.position;

    this.position.x = this.updatePosition(this.position.x, this.planet.sizeX);
    this.position.y = this.updatePosition(this.position.y, this.planet.sizeY);

    console.log('Le Rover se déplace');
  }

  private updatePosition(position: number, planetSizeMax: number) {
    if (position > planetSizeMax) return 0;
    if (position < 0) return planetSizeMax;
    return position
  }

  turn(direction: string) {
    if (direction.toUpperCase() !== 'L' && direction.toUpperCase() !== 'R') {
      console.log('Mauvaise direction');
      return;
    };

    switch (this.orientation) {
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
    console.log(`Le Rover se situe à ${this.position.x} en X, à ${this.position.y} en Y et est orienté au ${this.orientation}`)
  }
}

export let rover = new Rover(new Position(0, 0), Orientation.North, Jupiter);