import { Rover } from "./Rover";
import { RoverInterpretor } from './RoverInterpretor';

export class Command {

  roverInterpretor = new RoverInterpretor();
/**
 * Méthode qui va permettre d'executer la liste de commande 
 * passer en parametre au rover comme le fait de se deplacer, pivoter  ou 
 * encore, annoncer si il rencontre un obstacle.
 * @param listActions 
 * @param rover 
 * @returns 
 */
  public executListCommand(commandList: string, rover: Rover) {
    for (let i = 0; i < commandList.length; i++) {
      const character =commandList.charAt(i);
      if (!['A', 'R', 'G', 'D'].includes(character))
        continue;

      this.roverInterpretor.Interpretor(character,rover);
      
      if (rover.hasObstacle) {
        console.log('Il y a un obstacle');
        return;
      }
    }
  }
}

