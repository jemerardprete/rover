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
        return `Le Rover se situe à ${this.rover.position.x} en X, à ${this.rover.position.y} en Y et est orienté au ${this.rover.orientation}`
    }

    checkHasObstacle() {
        const obstacles = this.planet.getPositionObstacles();
        const hasObstacle = obstacles.some(obs => obs.x === this.rover.position.x && obs.y === this.rover.position.y);
        return hasObstacle;
    }

    /**
     * Vérifie et actualise la position (x ou y) du rover s'il dépasse une extrémité de la planète.
     * @returns la position actualisée
     */
    checkAndRefreshRoverPosition() {
        const roverPosition = this.rover.position;
        const planetSize = this.planet.size;

        if (roverPosition.y > planetSize.y) return roverPosition.y = 0;
        if (roverPosition.y < 0) return roverPosition.y = planetSize.y;
        if (roverPosition.x > planetSize.x) return roverPosition.x = 0;
        if (roverPosition.x < 0) return roverPosition.x = planetSize.x;

        this.rover.position = roverPosition;

    }

}
