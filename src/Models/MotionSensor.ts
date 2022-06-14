export class MotionSensor{

 topic: string;
occupied: string
state: string;

  constructor(topic: string, occupied: string, state: string){

    this.topic = topic;
    this.occupied = occupied;
    this.state = state;


  }
}
