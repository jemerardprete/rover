import promptSync from 'prompt-sync'
import { Orientation } from './models/Orientation.enum';
import {Planet } from './models/Planet';
import Position from './models/Position';
import { Command } from './models/Command';
import { Rover } from './models/Rover';
import { Environment } from './models/Environment';


// Taking User String Input (Name Input)
const prompt  = promptSync();
let movements = '';
const panneauCommand = new Command();
const Mars = new Planet(15, 15)
const Jupiter = new Planet(10, 10, [new Position(0, 2)])
const rover = new Rover(new Position(0, 0), Orientation.North, Jupiter);
const environment = new Environment(Jupiter,rover);

while(movements.toUpperCase() != 'Q') {
    environment.getInformations();
    movements = prompt('Indiquez une suite de commande pour déplacer le rover : F pour avancer, B pour reculer, L pour aller à gauche, R pour aller à droite : ');
    panneauCommand.executListCommand(movements, rover);
}

console.log('Vous avez quitté l\'application');