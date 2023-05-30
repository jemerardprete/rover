import { expect } from 'chai';
import 'mocha';
import Rover from '../class/Rover';
import Direction from '../class/Direction';
import Position from '../class/Position';

describe('Rover', () => {
  it('should be created', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    expect(rover).to.be.an.instanceOf(Rover);
  });

  it('should have a position', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    expect(rover.position).to.be.an.instanceOf(Position);
  });

  it('should have a direction', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    expect(rover.direction).to.be.an.instanceOf(Direction);
  });

  it('should be able to move forward', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    rover.moveForward();
    expect(rover.position.y).to.equal(1);
  });

  it('should be able to move backward', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    rover.moveBackward();
    expect(rover.position.y).to.equal(-1);
  });

  it('should be able to turn left', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    rover.turnLeft();
    expect(rover.direction.direction).to.equal('W');
  });

  it('should be able to turn right', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    rover.turnRight();
    expect(rover.direction.direction).to.equal('E');
  });

  it('should be able to convert to string', () => {
    const rover = new Rover(new Position(0, 0), new Direction('N'));
    expect(rover.toString()).to.equal('position : 0:0 \ndirection: N');
  });
});
