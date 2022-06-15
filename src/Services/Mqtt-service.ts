import {Injectable} from "@angular/core";
import {MqttClient} from "mqtt";

@Injectable({
  providedIn: 'root'
})
export class MqttService {
/**
 * The injectable Mqtt client which connects to the broker on the specific host IP
 * uses a ws protocol and port declared in the broker configurations in order for 
 * it to work in a browser
 */
  public Mqtt: MqttClient = require('mqtt/dist/mqtt').connect("mqtt://192.168.137.11", {
    clientId: "smarthomeWeb" + Math.random(),
    port: 9001,
    protocol: 'ws',
    path: '/mqtt'
  });

  constructor() {
  }

}
