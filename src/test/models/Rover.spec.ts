import { expect } from 'chai';
import { PlanetMars, RoverMarsNorth } from '../utils/builder.spec';
import { Orientation } from '../../models/Orientation.enum';
import 'mocha';

describe('Tester le comportement tourner du rover', () => {
  it('Le rover va faire un tour complet sur lui même - doit revenir dans sa position initial', () => {
    // GIVEN - ARRANGE
    const rover = RoverMarsNorth();
    const mouvements = 'RRRR';

    // WHEN - ACT
    rover.generateAction(mouvements);

    // THEN - ASSERT
    expect(rover.orientation).be.equal(Orientation.North);
  });

  it('Le rover va faire un demi tour sur lui même - démarre au nord fini au sud', () => {
    // GIVEN - ARRANGE
    let rover = RoverMarsNorth();
    const mouvements = 'RR';

    // WHEN - ACT
    rover.generateAction(mouvements);

    // THEN - ASSERT
    rover.getInformations();
    expect(rover.orientation).be.equal(Orientation.South);
  });

  it('Le rover va faire un tour à gauche - démarre au nord fini à l\'ouest', () => {
    // GIVEN - ARRANGE
    let rover = RoverMarsNorth();
    const mouvements = 'L';

    // WHEN - ACT
    rover.generateAction(mouvements);

    // THEN - ASSERT
    rover.getInformations();
    expect(rover.orientation).be.equal(Orientation.West);
  });
});


describe('Tester le comportement avancer du rover', () => {

  it('Le rover doit avancer - doit être sur la deuxième case de la planète', () => {
    // GIVEN - ARRANGE
    const rover = RoverMarsNorth();
    const mouvements = 'FF';

    // WHEN - ACT
    rover.generateAction(mouvements);

    // THEN - ASSERT
    expect(rover.position.y).be.equal(2);
  });

});
