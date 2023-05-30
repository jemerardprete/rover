import { expect } from 'chai';
import 'mocha';
import Planet from '../class/Planet';
import Rover from '../class/Rover';
import Direction from '../class/Direction';
import Position from '../class/Position';

describe('Planet', () => {
  it('should be created', () => {
    const planet = new Planet(10);
    expect(planet).to.be.an.instanceOf(Planet);
  });

  it('should have a size', () => {
    const planet = new Planet(10);
    expect(planet.size).to.equal(10);
  });

  it('should be able to move the rover without warp', () => {
    const planet = new Planet(10);
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    rover.moveForward();
    planet.moveRoverInPlanet(rover);
    expect(rover.position.y).to.equal(1);
    expect(rover.position.x).to.equal(0);
  });

  it('should be able to move the rover with warp', () => {
    const planet = new Planet(10);
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    rover.moveBackward();
    planet.moveRoverInPlanet(rover);
    expect(rover.position.y).to.equal(9);
    expect(rover.position.x).to.equal(0);
  });
});
