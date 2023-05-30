import Planet from './class/Planet';
import Position from './class/Position';
import Rover from './class/Rover';
import Direction from './class/Direction';
import * as readline from 'readline';

function awaitUserPrompt(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Entrez une commande (EXIT pour quitter) : ', (reponse) => {
      rl.close();
      resolve(reponse);
    });
  });
}

async function start() {
  let continuer = true;
  const planet = new Planet(10);
  const position = new Position(0, 0);
  const rover = new Rover(position, new Direction('N'));
  console.log('Commandes : L (gauche), R (droite), F (avancer), B (reculer)');
  console.log(rover.toString());
  while (continuer) {
    const commande = await awaitUserPrompt();

    switch (commande.toUpperCase()) {
      case 'EXIT':
        continuer = false;
        break;
      case 'F':
        rover.moveForward();
        planet.moveRoverInPlanet(rover);
        break;
      case 'B':
        rover.moveBackward();
        planet.moveRoverInPlanet(rover);
        break;
      case 'L':
        rover.turnLeft();
        break;
      case 'R':
        rover.turnRight();
        break;
      default:
        console.log('Commande invalide');
    }

    console.log(rover.toString());
  }

  console.log('Programme terminé.');
}

start();
