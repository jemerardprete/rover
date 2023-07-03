import Position from "./Position";
import { Size } from "./Size";

export class Planet {
    size: Size;
    private obstacles: Position[];

    constructor(sizeX: number, sizeY: number, obstacles: Position[] = []) {
        this.size = { x: sizeX, y: sizeY };
        this.obstacles = obstacles;
    }

    /**
     * Récupère les positions des obstacles 
     * @returns un tableau contenant les positions des obstacles 
     */
    getPositionObstacles() {
        return this.obstacles;
    }

}
