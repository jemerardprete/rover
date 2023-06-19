import { Rover } from "./Rover";
import { RoverInterpretor } from './RoverInterpretor';
import { Detector } from './Detector';

export class Command {

  roverInterpretor: RoverInterpretor;
  detector: Detector;

  constructor(roverInterpretor: RoverInterpretor, detector: Detector) {
    this.roverInterpretor = roverInterpretor;
    this.detector = detector;
  }

  /**
   * Méthode qui va permettre d'executer la liste de commande 
   * passer en parametre au rover comme le fait de se deplacer, pivoter  ou 
   * encore, annoncer si il rencontre un obstacle.
   * @param listActions 
   * @returns 
   */
  public executListCommand(commandList: string) {
    for (let i = 0; i < commandList.length; i++) {
      const character = commandList.charAt(i);
      if (!['A', 'R', 'G', 'D'].includes(character))
        continue;

      this.roverInterpretor.Interpretor(character);

      if (this.detector.checkHasObstacle()) {
        console.log('Il y a un obstacle');
        return;
      }

      this.detector.verifyOrRefreshPosition();
    }
  }
}

