import { Command } from "../../models/Command";
import { Orientation } from "../../models/Orientation.enum";
import { Planet } from "../../models/Planet";
import Position from "../../models/Position";
import { Rover } from "../../models/Rover";


let PlanetMars = () => new Planet(10, 10);
let PlanetJupiter = () =>new Planet(2, 2);
let PlanetSaturne = () => new Planet(5, 5, [new Position(0, 2)]);
let PanneauCommand = () => new Command();



let RoverMarsNorth = () => new Rover(new Position(0, 0), Orientation.North, PlanetMars());
let RoverJupiterNorth = () => new Rover(new Position(0, 0), Orientation.North, PlanetJupiter());
let RoverSaturneNorth = () => new Rover(new Position(0, 0), Orientation.North, PlanetSaturne());


export {
  PlanetMars,
  PlanetJupiter,
  PlanetSaturne,
  RoverMarsNorth ,
  RoverJupiterNorth ,
  RoverSaturneNorth,
  PanneauCommand 
}