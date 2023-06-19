import Position from "./Position";
import { Size } from "./Size";

export class Planet {
    size : Size;
    private obstacles: Position[];

     constructor(sizeX: number, sizeY: number, obstacles: Position[] = []) {
        this.size = {x:sizeX,y:sizeY};
        this.obstacles = obstacles;
    }

    getObstacles() {
        return this.obstacles;
    }

}
