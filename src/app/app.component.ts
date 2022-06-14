import {Component, OnInit} from '@angular/core';
import {MqttClient} from 'mqtt';
import {Device} from 'src/Models/device';
import {Service} from 'src/Models/Service';
import {isNumber} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Smarthome Dashboard';
  devices: any[];
    public linkquality: number;

  constructor(private service: Service) {
  }

  ngOnInit(): void {
    this.devices = this.service.getAll();
    this.service.Mqtt.subscribe("zigbee2mqtt/Lamp1")
    this.service.Mqtt.on('message', (topic, payload) => {
      console.log(payload.toString())

      let messageObj = JSON.parse(payload.toString())
      this.linkquality= messageObj.linkquality;
      console.log(this.linkquality)

    });

  }
}
