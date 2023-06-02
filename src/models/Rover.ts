import { Orientation } from "./Orientation.enum";
import Position from "./Position";
import {  Planet } from "./Planet";

export class Rover {
  position: Position;
  orientation: Orientation;
  planet: Planet;
  hasObstacle: boolean = false;

  constructor(position: Position, orientation: Orientation, planet: Planet) {
    this.position = position;
    this.orientation = orientation;
    this.planet = planet;
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

    this.position.x = this.verifyOrRefreshPosition(this.position.x, this.planet.sizeX);
    this.position.y = this.verifyOrRefreshPosition(this.position.y, this.planet.sizeY);

    console.log('Le Rover se déplace');
  }

  /**
   * Vérifie et renvoie la  position (x ou y) du rover et l'actualise s'il dépasse la taille minimum ou maximum de la planète.
   * @param position x ou y du rover a actualisé
   * @param planetSizeMax taille x ou y maximum de la planète
   * @returns la nouvelle position actualisé ou non
   */
  verifyOrRefreshPosition(position: number, planetSizeMax: number) {
    if (position > planetSizeMax) return 0;
    if (position < 0) return planetSizeMax;
    return position;
  }

  turn(direction: string) {
    if (direction.toUpperCase() !== 'L' && direction.toUpperCase() !== 'R') {
      console.log('Mauvaise direction');
      return;
    };

    switch (this.orientation) {
      case Orientation.North:{
          this.orientation = direction.toUpperCase() == 'L' ? Orientation.West : Orientation.East;
          break;
        }
      case Orientation.South: {
        this.orientation = direction.toUpperCase() == 'L' ? Orientation.East : Orientation.West;
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

}

