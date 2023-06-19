import { Rover } from './Rover';
import { Detector } from './Detector';


export class RoverInterpretor {

  rover: Rover;
  detector: Detector;

  constructor(rover: Rover, detector: Detector) {
    this.rover = rover;
    this.detector = detector;
  }

  interpret(command: string) {
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

    if (this.detector.checkHasObstacle()) return;
    this.detector.checkAndRefreshRoverPosition();

  }

}
