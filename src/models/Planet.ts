import Position from "./Position";

export class Planet {
    sizeX: number;
    sizeY: number;
    obstacles: Position[];

    public constructor(sizeX: number, sizeY: number, obstacles: Position[] = []) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.obstacles = obstacles;
    }
}

const Mars = new Planet(15, 15)
const Jupiter = new Planet(10, 10, [new Position(0, 2)])

export {
    Mars,
    Jupiter
}