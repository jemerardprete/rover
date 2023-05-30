// create test for direction with mocha
import { expect } from 'chai';
import 'mocha';
import Direction from '../class/Direction';

describe('Direction', () => {
  it('should be created', () => {
    const direction = new Direction('N');
    expect(direction).to.be.an.instanceOf(Direction);
  });

  it('should have a direction', () => {
    const direction = new Direction('N');
    expect(direction.direction).to.equal('N');
  });

  it('should be able to change direction', () => {
    const direction = new Direction('N');
    direction.direction = 'S';
    expect(direction.direction).to.equal('S');
  });

  it('should be able to turn left', () => {
    const direction = new Direction('N');
    const newDirection = direction.turnLeft();
    expect(newDirection.direction).to.equal('W');
  });

  it('should be able to turn right', () => {
    const direction = new Direction('N');
    const newDirection = direction.turnRight();
    expect(newDirection.direction).to.equal('E');
  });

  it('should be able to convert to string', () => {
    const direction = new Direction('N');
    expect(direction.toString()).to.equal('N');
  });
});
