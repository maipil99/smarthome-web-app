import {Component, OnInit} from '@angular/core';
import { DeviceService } from 'src/Services/Device-service';
import { LinkqualityService } from 'src/Services/Linkquality-service';
import {MqttService} from 'src/Services/Mqtt-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Smarthome Dashboard';
  //devices: any[];

  public linkquality = this.linkqualityService.linkquality;
  public linkqualityData = this.linkqualityService.linkqualityData;

  constructor(
    //private deviceService: DeviceService, 
    private linkqualityService : LinkqualityService, 
    private mqttService: MqttService
  ) {}


  ngOnInit(): void {
    //this.devices = this.deviceService.getAll();
    
    this.mqttService.Mqtt.subscribe("zigbee2mqtt/Lamp1");

    this.mqttService.Mqtt.on('message', (topic, payload) => {
    let messageObj = JSON.parse(payload.toString())
     
      this.linkquality= messageObj.linkquality;
      this.linkqualityData.push([this.linkquality])
      
      console.log(this.linkquality)
    });

  }
}
