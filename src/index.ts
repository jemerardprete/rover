import promptSync from 'prompt-sync'
import { rover } from './models/rover';

// Taking User String Input (Name Input)
const prompt  = promptSync();
let direction = '';

while(direction.toUpperCase() != 'Q') {
    rover.getInformations();
    direction = prompt('Choisissez une direction : F pour avancer, B pour reculer, L pour aller à gauche, R pour aller à droite : ');

    (direction == 'F' || direction == 'B') ? rover.move(direction) : rover.turn(direction);
}

console.log('Vous avez quitté l\'application');