import {Injectable} from "@angular/core";
import {MqttClient} from "mqtt";

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  public Mqtt: MqttClient = require('mqtt/dist/mqtt').connect("mqtt://192.168.137.11", {
    clientId: "smarthomeWeb" + Math.random(),
    port: 9001,
    protocol: 'ws',
    path: '/mqtt'
  });

  constructor() {
  }

}
