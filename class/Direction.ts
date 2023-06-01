class Direction {
  private _direction: string;
  constructor(direction: string) {
    this._direction = direction;
  }

  get direction(): string {
    return this._direction;
  }

  set direction(direction: string) {
    this._direction = direction;
  }

  turnLeft(): Direction {
    switch (this._direction) {
      case 'N':
        return new Direction('W');
      case 'S':
        return new Direction('E');
      case 'E':
        return new Direction('N');
      case 'W':
        return new Direction('S');
      default:
        throw new Error('Invalid direction');
    }
  }

  turnRight(): Direction {
    switch (this._direction) {
      case 'N':
        return new Direction('E');
      case 'S':
        return new Direction('W');
      case 'E':
        return new Direction('S');
      case 'W':
        return new Direction('N');
      default:
        console.log('pog');
        throw new Error('Invalid direction');
    }
  }

  toString(): string {
    return this._direction;
  }
}

export default Direction;
