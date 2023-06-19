import { Orientation } from "./Orientation.enum";
import Position from "./Position";

export class Rover {
  position: Position;
  orientation: Orientation;

  constructor(position: Position, orientation: Orientation) {
    this.position = position;
    this.orientation = orientation;
  }

  /**
   * Permets au rover d'avancer en fonction de son orientation
   */
  Avancer(){
    switch (this.orientation) {
      case Orientation.North: {
        this.position.y = ++this.position.y;
        break;
      }
      case Orientation.South: {
        this.position.y = --this.position.y ;
        break;
      }
      case Orientation.East: {
        this.position.x = ++this.position.x;
        break;
      }
      case Orientation.West: {
        this.position.x = --this.position.x;
        break;
      }
    }
  }
  /**
   * Permets au rover de reculer en fonction de son orientation
   */
  Reculer(){
    switch (this.orientation) {
      case Orientation.North: {
        this.position.y = --this.position.y;
        break;
      }
      case Orientation.South: {
        this.position.y = ++this.position.y;
        break;
      }
      case Orientation.East: {
        this.position.x = --this.position.x;
        break;
      }
      case Orientation.West: {
        this.position.x = ++this.position.x;
        break;
      }

    }
  }
  
  /**
   * Permets au rover de tourner sur sa gauche en fonction de son orientation
   */
  Gauche(){
    switch (this.orientation) {
      case Orientation.North:{
          this.orientation = Orientation.West;
          break;
        }
      case Orientation.South: {
        this.orientation = Orientation.East;
        break;
      }
      case Orientation.East: {
        this.orientation = Orientation.North;
        break;
      }
      case Orientation.West: {
        this.orientation = Orientation.South;
        break;
      }

    }
  }

  /**
   * Permets au rover de tourner sur sa droite en fonction de son orientation
   */
  Droite(){
    switch (this.orientation) {
      case Orientation.North:{
          this.orientation = Orientation.East;
          break;
        }
      case Orientation.South: {
        this.orientation = Orientation.West;
        break;
      }
      case Orientation.East: {
        this.orientation =  Orientation.South;
        break;
      }
      case Orientation.West: {
        this.orientation = Orientation.North;
        break;
      }
    }
  }



}

