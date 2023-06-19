import { Command } from "../../models/Command";
import { Orientation } from "../../models/Orientation.enum";
import { Planet } from "../../models/Planet";
import Position from "../../models/Position";
import { Rover } from "../../models/Rover";
import { Detector } from '../../models/Detector';
import { RoverInterpretor } from '../../models/RoverInterpretor';


const PlanetJupiter = () =>new Planet(2, 2);
const PlanetSaturne = () => new Planet(5, 5, [new Position(0, 2)]);

const RoverNorth = () => new Rover(new Position(0, 0), Orientation.North);
const RoverSouth = () => new Rover(new Position(0, 0), Orientation.South);

const DetectorInit = (rover: Rover, planet: Planet) => new Detector(rover, planet);

const RoverInterpretorInit = (rover: Rover) => new RoverInterpretor(rover);

const PanneauCommand = (roverInterpretor: RoverInterpretor, detector: Detector) => new Command(roverInterpretor, detector);

export {
  PlanetJupiter,
  PlanetSaturne,
  RoverNorth,
  RoverSouth,
  DetectorInit,
  RoverInterpretorInit,
  PanneauCommand 
}