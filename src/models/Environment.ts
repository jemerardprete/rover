import { Planet } from "./Planet";
import { Rover } from "./Rover";

export class Environment {
  planet: Planet;
  rover: Rover;

  constructor(planet: Planet, rover: Rover) {
    this.planet = planet;
    this.rover = rover;
    
  }

    getInformations() {
        console.log(`Le Rover se situe à ${this.rover.position.x} en X, à ${this.rover.position.y} en Y et est orienté au ${this.rover.orientation}.
        La planète mesure ${this.planet.sizeX} en X, et mesure ${this.planet.sizeY} en Y.`)
        // console.log(`La planète mesure ${this.planet.sizeX} en X, et mesure ${this.planet.sizeY} en Y.`)
      }
}