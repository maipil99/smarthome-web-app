export class Lamp{

  topic: string;
  brightness: number;
  color_temp: number;
  state: string;
  type: string;

    constructor(topic: string, brightness: number, color_temp: number, state: string, type: string){
      this.topic = topic;
      this.brightness = brightness;
      this.color_temp = color_temp;
      this.state = state;
      this.type = type;
    }
}
