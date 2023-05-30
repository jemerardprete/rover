import * as promptSync from 'prompt-sync'

// Taking User String Input (Name Input)
const prompt  = promptSync();

const name = prompt('What is your name?');

console.log(`Hello, ${name}! Welcome to Code in Piece!`);
