import promptSync from 'prompt-sync'
import { Orientation } from './models/Orientation.enum';
import { Jupiter } from './models/Planet';
import Position from './models/Position';
import { Rover } from './models/rover';

// Taking User String Input (Name Input)
const prompt  = promptSync();
let movements = '';
const rover = new Rover(new Position(0, 0), Orientation.North, Jupiter);

while(movements.toUpperCase() != 'Q') {
    rover.getInformations();
    movements = prompt('Indiquez une suite de commande pour déplacer le rover : F pour avancer, B pour reculer, L pour aller à gauche, R pour aller à droite : ');
    rover.generateAction(movements);
}

console.log('Vous avez quitté l\'application');