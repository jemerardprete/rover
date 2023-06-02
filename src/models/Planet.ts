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


