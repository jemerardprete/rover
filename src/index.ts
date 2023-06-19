import promptSync from 'prompt-sync'
import { Orientation } from './models/Orientation.enum';
import { Planet } from './models/Planet';
import Position from './models/Position';
import { Command } from './models/Command';
import { Rover } from './models/Rover';
import { RoverInterpretor } from './models/RoverInterpretor';
import { Detector } from './models/Detector';


const prompt = promptSync();

let commandList = '';
const jupiter = new Planet(10, 10, [new Position(0, 2)]);
const rover = new Rover(new Position(0, 0), Orientation.North);
const detector = new Detector(rover, jupiter);
const roverInterpretor = new RoverInterpretor(rover, detector);
const panneauCommand = new Command(roverInterpretor);

while (commandList.toUpperCase() != 'Q') {
    console.log(detector.getEnvironmentInformations());
    commandList = prompt('Indiquez une suite de commande pour déplacer le rover : A pour avancer, R pour reculer, G pour aller à gauche, D pour aller à droite : ');
    panneauCommand.executListCommand(commandList);
}

console.log('Vous avez quitté l\'application');