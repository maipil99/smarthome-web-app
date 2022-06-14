import {Injectable} from "@angular/core";
import {MqttClient} from "mqtt";
import {Device} from "./device";
import {Lamp} from "./Lamp";
import {MotionSensor} from "./MotionSensor";

@Injectable({
  providedIn: 'root'
})
export class Service {

 public  Lamp1 = new Lamp("Lamp1", 100, 100, "ON", "Lamp")
  public MotionSensor = new MotionSensor("MotionSensor","true", "ON")

  public devices: Device[] = [
    {id: 1, name: this.Lamp1.topic, state: this.Lamp1.state},
    {id: 2, name: this.MotionSensor.topic, state: this.MotionSensor.state}];

  public Mqtt: MqttClient = require('mqtt/dist/mqtt').connect("mqtt://192.168.137.11", {
    clientId: "smarthomeWeb" + Math.random(),
    port: 9001,
    protocol: 'ws',
    path: '/mqtt'
  });

  constructor() {
  }

  //getAll()
  public getAll(): Array<Device> {
    return this.devices;
  }
}
