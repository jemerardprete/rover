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

  it('should be able to turn left from N', () => {
    const direction = new Direction('N');
    const newDirection = direction.turnLeft();
    expect(newDirection.direction).to.equal('W');
  });

  it('should be able to turn left from S', () => {
    const direction = new Direction('S');
    const newDirection = direction.turnLeft();
    expect(newDirection.direction).to.equal('E');
  });

  it('should be able to turn left from E', () => {
    const direction = new Direction('E');
    const newDirection = direction.turnLeft();
    expect(newDirection.direction).to.equal('N');
  });

  it('should be able to turn left from W', () => {
    const direction = new Direction('W');
    const newDirection = direction.turnLeft();
    expect(newDirection.direction).to.equal('S');
  });

  it('should be able to turn right from N', () => {
    const direction = new Direction('N');
    const newDirection = direction.turnRight();
    expect(newDirection.direction).to.equal('E');
  });

  it('should be able to turn right from S', () => {
    const direction = new Direction('S');
    const newDirection = direction.turnRight();
    expect(newDirection.direction).to.equal('W');
  });

  it('should be able to turn right from E', () => {
    const direction = new Direction('E');
    const newDirection = direction.turnRight();
    expect(newDirection.direction).to.equal('S');
  });

  it('should be able to turn right from W', () => {
    const direction = new Direction('W');
    const newDirection = direction.turnRight();
    expect(newDirection.direction).to.equal('N');
  });

  it('should be able to convert to string', () => {
    const direction = new Direction('N');
    expect(direction.toString()).to.equal('N');
  });
});
