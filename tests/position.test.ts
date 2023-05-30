import { expect } from 'chai';
import 'mocha';
import Position from '../class/Position';

describe('Position', () => {
  it('should be created', () => {
    const position = new Position(0, 0);
    expect(position).to.be.an.instanceOf(Position);
  });

  it('should have a x coordinate', () => {
    const position = new Position(0, 0);
    expect(position.x).to.equal(0);
  });

  it('should have a y coordinate', () => {
    const position = new Position(0, 0);
    expect(position.y).to.equal(0);
  });

  it('should be able to convert to string', () => {
    const position = new Position(0, 0);
    expect(position.toString()).to.equal('0:0');
  });
});
