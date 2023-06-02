import { Rover } from "./Rover";

export class Command {

/**
 * Méthode qui va permettre d'executer la liste de commande 
 * passer en parametre au rover comme le fait de se deplacer, pivoter  ou 
 * encore, annoncer si il rencontre un obstacle.
 * @param listActions 
 * @param rover 
 * @returns 
 */
  public executListCommand(listActions: string, rover: Rover) {
    for (let i = 0; i < listActions.length; i++) {
      const character = listActions.charAt(i);
      if (!['F', 'B', 'L', 'R'].includes(character))
        continue;
      (character == 'F' || character == 'B') ? rover.move(character) : rover.turn(character);
      if (rover.hasObstacle) {
        console.log('Il y a un obstacle');
        return;
      }
    }
  }
}

