import { Rover } from './Rover';

export class RoverInterpretor {

  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  Interpretor(command: string) {
    switch (command) {
      case 'A':
        this.rover.Avancer();
        break;
      case 'R':
        this.rover.Reculer();
        break;
      case 'G':
        this.rover.Gauche();
        break;
      case 'D':
        this.rover.Droite();
        break;
    }

  }

}
