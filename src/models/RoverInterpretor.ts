import { Rover } from './Rover';

export class RoverInterpretor {
  Interpretor(command: string, rover: Rover) {
    switch (command) {
      case 'A':
        rover.Avancer();
        break;
      case 'R':
        rover.Reculer();
        break;
      case 'G':
        rover.Gauche();
        break;
      case 'D':
        rover.Droite();
        break;
    }

    if (rover.hasObstacle) {
      console.log('Il y a un obstacle');
      return;
    }
  }
}
