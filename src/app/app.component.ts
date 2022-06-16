import { Component, OnInit } from '@angular/core';
import { MqttService } from 'src/Services/Mqtt-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Smarthome Dashboard';

  constructor(
    private mqttService: MqttService
  ) { }

  /**
   * subscribe to mqtt topics on app init
   */
  ngOnInit(): void {

    this.mqttService.Mqtt.subscribe("zigbee2mqtt/Lamp1");

  }
}
