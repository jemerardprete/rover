import { expect } from 'chai';
import { PanneauCommand, PlanetJupiter, PlanetSaturne, RoverNorth, RoverInterpretorInit, DetectorInit } from '../utils/builder.spec';
import { Orientation } from '../../models/Orientation.enum';
import 'mocha';

describe('Tester le comportement tourner du rover', () => {
  it('Le rover va faire un tour complet sur lui même - doit revenir dans sa position initial', () => {
    // GIVEN - ARRANGE
    const rover = RoverNorth();
    const jupiter = PlanetJupiter();
    const mouvements = 'DDDD';
    const detector = DetectorInit(rover, jupiter);

    const interpretor = RoverInterpretorInit(rover, detector);
    const panneauCommand = PanneauCommand(interpretor);

    // WHEN - ACT
    panneauCommand.executListCommand(mouvements);

    // THEN - ASSERT
    expect(rover.orientation).be.equal(Orientation.North);
  });

  it('Le rover va faire un demi tour sur lui même - démarre au nord fini au sud', () => {
    // GIVEN - ARRANGE
    const rover = RoverNorth();
    const jupiter = PlanetJupiter();
    const mouvements = 'DD';
    const detector = DetectorInit(rover, jupiter);
    const interpretor = RoverInterpretorInit(rover, detector);
    const panneauCommand = PanneauCommand(interpretor);

    // WHEN - ACT
    panneauCommand.executListCommand(mouvements);

    // THEN - ASSERT
    expect(rover.orientation).be.equal(Orientation.South);
  });

  it('Le rover va faire un tour à gauche - démarre au nord fini à l\'ouest', () => {
    // GIVEN - ARRANGE
    const rover = RoverNorth();
    const jupiter = PlanetJupiter();
    const mouvements = 'G';
    const detector = DetectorInit(rover, jupiter);
    const interpretor = RoverInterpretorInit(rover, detector);
    const panneauCommand = PanneauCommand(interpretor);

    // WHEN - ACT
    panneauCommand.executListCommand(mouvements);

    // THEN - ASSERT
    expect(rover.orientation).be.equal(Orientation.West);
  });
});


describe('Tester le comportement avancer du rover', () => {

  it('Le rover doit avancer - doit être sur la deuxième case de la planète', () => {
    // GIVEN - ARRANGE
    const rover = RoverNorth();
    const jupiter = PlanetJupiter();
    const mouvements = 'AA';
    const detector = DetectorInit(rover, jupiter);
    const interpretor = RoverInterpretorInit(rover, detector);
    const panneauCommand = PanneauCommand(interpretor);

    // WHEN - ACT
    panneauCommand.executListCommand(mouvements);

    // THEN - ASSERT
    expect(rover.position.y).be.equal(2);
  });

  it('Le rover rencontre un obstacle', () => {
    // GIVEN - ARRANGE
    const rover = RoverNorth();
    const saturne = PlanetSaturne();
    const mouvements = 'AAA';
    const detector = DetectorInit(rover, saturne);
    const interpretor = RoverInterpretorInit(rover, detector);
    const panneauCommand = PanneauCommand(interpretor);

    // WHEN - ACT
    panneauCommand.executListCommand(mouvements);

    // THEN - ASSERT
    expect(rover.position.y).be.equal(1);
  });

  it('Le rover doit réinitialiser sa position lorsqu\'il arrive à une extremité de la planète', () => {
    // GIVEN - ARRANGE
    const rover = RoverNorth();
    const jupiter = PlanetJupiter();
    const mouvements = 'R';
    const detector = DetectorInit(rover, jupiter);
    const interpretor = RoverInterpretorInit(rover, detector);
    const panneauCommand = PanneauCommand(interpretor);

    // WHEN - ACT
    panneauCommand.executListCommand(mouvements);

    // THEN - ASSERT
    expect(rover.position.y).be.equal(jupiter.size.y);
  });

});
