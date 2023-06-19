import { Rover } from './Rover';

export class RoverInterpretor {
  Interceptor(command: string, rover: Rover) {
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
  }
}
