import * as promptSync from 'prompt-sync'
import { rover } from './models/rover';

// Taking User String Input (Name Input)
const prompt  = promptSync();

const name = prompt('What is your name?');

console.log(`Hello, ${name}! Welcome to Code in Piece!`);

console.log(rover.getInformations())