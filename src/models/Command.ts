import { RoverInterpretor } from './RoverInterpretor';

export class Command {

  roverInterpretor: RoverInterpretor;

  constructor(roverInterpretor: RoverInterpretor) {
    this.roverInterpretor = roverInterpretor;
  }

  /**
   * Méthode qui va permettre d'executer la liste de commande 
   * passer en paramètre
   * @param commandList liste de commande à transmettre à l'interpréteur
   */
  public executListCommand(commandList: string) {
    for (let i = 0; i < commandList.length; i++) {
      const character = commandList.charAt(i);
      if (!['A', 'R', 'G', 'D'].includes(character))
        continue;

      const hasMoved = this.roverInterpretor.interpretAndMoveIfPossible(character);

      if(hasMoved === false) break;
    }

  }
}
