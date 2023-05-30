import { Orientation } from "./Orientation.enum";

class Rover {
  x: number;
  y: number;
  orientation: Orientation;

  constructor(x: number, y: number, orientation: Orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  move() {
    console.log('Le Rover se déplace');
  }

  turn() {
    console.log('Le Rover pivote');
  }

  getInformations() {
    console.log(`Le Rover se situe à ${this.x} en X, à ${this.y} en Y et est orienté au ${this.orientation}`)
  }
}

export let rover = new Rover(5, 5, Orientation.North);