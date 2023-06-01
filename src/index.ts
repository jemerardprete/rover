import promptSync from 'prompt-sync'
import { rover } from './models/rover';

// Taking User String Input (Name Input)
const prompt  = promptSync();
let movements = '';

while(movements.toUpperCase() != 'Q') {
    rover.getInformations();
    movements = prompt('Indiquez une suite de commande pour déplacer le rover : F pour avancer, B pour reculer, L pour aller à gauche, R pour aller à droite : ');
    rover.generateAction(movements);
}

console.log('Vous avez quitté l\'application');