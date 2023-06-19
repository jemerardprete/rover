import { Rover } from "./Rover";
import { Planet } from './Planet';

export class Detector {

    rover: Rover;
    planet: Planet;

    constructor(rover: Rover, planet: Planet) {
        this.rover = rover;
        this.planet = planet;
    }

    getEnvironmentInformations() {
        console.log(`Le Rover se situe à ${this.rover.position.x} en X, à ${this.rover.position.y} en Y et est orienté au ${this.rover.orientation}`)
        // console.log(`La planète mesure ${this.planet.sizeX} en X, et mesure ${this.planet.sizeY} en Y.`)
      }

    checkHasObstacle() {
        const obstacles = this.planet.getObstacles();
        const hasObstacle = obstacles.some(obs => obs.x === this.rover.position.x && obs.y === this.rover.position.y);
        return hasObstacle;
    }

    /**
   * Vérifie et renvoie la  position (x ou y) du rover et l'actualise s'il dépasse la taille minimum ou maximum de la planète.
   * @returns la nouvelle position actualisé ou non
   */
    verifyOrRefreshPosition() {

        if(this.rover.position.y > this.planet.sizeY) return this.rover.position.y = 0;
        if(this.rover.position.y < 0) return this.rover.position.y = this.planet.sizeY;
        if(this.rover.position.x > this.planet.sizeX) return this.rover.position.x = 0;
        if(this.rover.position.x < 0) return this.rover.position.x = this.planet.sizeX;

    }

}
