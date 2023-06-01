import Planet from './class/Planet';
import Position from './class/Position';
import Rover from './class/Rover';
import Direction from './class/Direction';
import * as readline from 'readline';
import colors from 'ansi-colors';

function awaitUserPrompt(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Entrez une list de commande : ', (reponse) => {
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
  console.log(
    colors.blue(
      'Commandes : L (gauche), R (droite), F (avancer), B (reculer)\n'
    )
  );
  console.log(colors.green(rover.toString()));
  const commandsString = await awaitUserPrompt();
  const commands = commandsString.split('');
  for (const commande of commands) {
    console.log('\nCommande : ' + commande);
    const currentPositionRover = new Position(
      rover.position.x,
      rover.position.y
    );
    switch (commande.toUpperCase()) {
      case 'EXIT':
        continuer = false;
        break;
      case 'F':
        rover.moveForward();
        planet.moveRoverInPlanet(rover);
        if (planet.isInObstacle(rover)) {
          console.log(colors.red("Obstacle détecté, impossible d'avancer"));
          continuer = false;
          rover.position = currentPositionRover;
        }
        break;
      case 'B':
        rover.moveBackward();
        planet.moveRoverInPlanet(rover);
        if (planet.isInObstacle(rover)) {
          console.log(colors.red('Obstacle détecté, impossible de reculer'));
          continuer = false;
          rover.position = currentPositionRover;
        }
        break;
      case 'L':
        rover.turnLeft();
        break;
      case 'R':
        rover.turnRight();
        break;
      default:
        console.log(colors.red('Commande invalide'));
    }
    console.log(colors.green(rover.toString()));
    if (!continuer) {
      break;
    }
  }
  console.log('Programme terminé.');
}

start();
