import { Rover } from './Rover';
import { Detector } from './Detector';


export class RoverInterpretor {

  rover: Rover;
  detector: Detector;

  constructor(rover: Rover, detector: Detector) {
    this.rover = rover;
    this.detector = detector;
  }

  /**
   * Interprêter les commandes pour faire bouger le rover s'il n'y pas d'obstacles et renvoie false s'il rencontre un obstacle
   * @param command 
   * @returns boolean 
   */
  interpretAndMoveIfPossible(command: string) {

    if (this.detector.nextMoveHasObstacle(command)) return false;

    switch (command) {
      case 'A':
        this.rover.moveForward();
        break;
      case 'R':
        this.rover.moveBackward();
        break;
      case 'G':
        this.rover.turnLeft();
        break;
      case 'D':
        this.rover.turnRight();
        break;
    }

    this.detector.updateRoverPositionIfExceedsPlanetBoundary();

    return true;

  }

}
