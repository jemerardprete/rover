import { Command } from "../../models/Command";
import { Orientation } from "../../models/Orientation.enum";
import { Planet } from "../../models/Planet";
import Position from "../../models/Position";
import { Rover } from "../../models/Rover";
import { Detector } from '../../models/Detector';
import { RoverInterpretor } from '../../models/RoverInterpretor';

const PlanetJupiter = () => new Planet(2, 2);
const PlanetSaturne = () => new Planet(5, 5, [new Position(0, 2)]);
const RoverNorth = () => new Rover(new Position(0, 0), Orientation.North);
const DetectorInit = (rover: Rover, planet: Planet) => new Detector(rover, planet);
const RoverInterpretorInit = (rover: Rover, detector: Detector) => new RoverInterpretor(rover, detector);
const PanneauCommand = (roverInterpretor: RoverInterpretor) => new Command(roverInterpretor);

export {
  PlanetJupiter,
  PlanetSaturne,
  RoverNorth,
  DetectorInit,
  RoverInterpretorInit,
  PanneauCommand
}
