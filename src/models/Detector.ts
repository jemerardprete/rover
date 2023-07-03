import { Rover } from "./Rover";
import { Planet } from './Planet';
import { Orientation } from "./Orientation.enum";

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
     */
    updateRoverPositionIfExceedsPlanetBoundary() {
        const roverPosition = this.rover.position;
        const planetSize = this.planet.size;

        if (roverPosition.y > planetSize.y) return roverPosition.y = 0;
        if (roverPosition.y < 0) return roverPosition.y = planetSize.y;
        if (roverPosition.x > planetSize.x) return roverPosition.x = 0;
        if (roverPosition.x < 0) return roverPosition.x = planetSize.x;

        this.rover.position = roverPosition;
    }

    /**
     * Va vérifier si lors du prochain mouvement avancer ou reculer le rover va rencontrer un obstable
     * @param movement le caractère qui représente
     * @returns 
     */
    nextMoveHasObstacle(movement: string) {

        if(movement !== 'A' && movement !== 'R') return false;

        const roverFuturePosition = {...this.rover.position};
        const roverOrientation = this.rover.orientation;
        const obstacles = this.planet.getPositionObstacles();

        // Si j'avance ou recule mon rover
        switch (roverOrientation) {
            case Orientation.North: {
                roverFuturePosition.y = (movement === 'A') ? ++roverFuturePosition.y : --roverFuturePosition.y;
                break;
            };
            case Orientation.South: {
                roverFuturePosition.y = (movement === 'A') ? --roverFuturePosition.y : ++roverFuturePosition.y;
                break;
            };
            case Orientation.East: {
                roverFuturePosition.x = (movement === 'A') ? ++roverFuturePosition.x : --roverFuturePosition.x;
                break;
            };
            case Orientation.West: {
                roverFuturePosition.x = (movement === 'A') ? --roverFuturePosition.x : ++roverFuturePosition.x;
                break;
            };
        }
        // et que j'ai un obstacle sur la planète
        const hasObstacle = obstacles.some(obs => obs.x === roverFuturePosition.x && obs.y === roverFuturePosition.y);

        // je retourne true
        if(hasObstacle) return true;

        // sinon je retourne false
        return false

    }
    
    
    
}