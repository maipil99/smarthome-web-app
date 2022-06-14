import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Service} from 'src/Models/Service';
import {MatSliderChange} from '@angular/material/slider';
import {DashComponent} from "../dash/dash.component";
import {Lamp} from "../../Models/Lamp";

@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.component.html',
  styleUrls: ['./device-modal.component.css']
})
export class DeviceModalComponent implements OnInit {
  deviceId = sessionStorage.getItem('index');

  device = this.dash.deviceList[this.deviceId];
  title: string = this.device.name;
  options = ['breathe', 'blink', 'okay'];

  brightness = this.device.brightness;
  color_temp = this.device.color_temp;
  effect = this.device.effect;

  constructor(public dialogRef: MatDialogRef<DeviceModalComponent>, private service: Service, private dash: DashComponent) {
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value);
    }
    return value;
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  setState(value) {
    if (value == "ON"){
      this.service.Mqtt.publish("zigbee2mqtt/"+ this.device.name + "/set/state", "ON");
      this.device.state = "ON";
    }
    else{
      this.service.Mqtt.publish("zigbee2mqtt/"+ this.device.name + "/set/state", "OFF")
      this.device.state = "OFF";
    }
  }

  setBrightness(event: MatSliderChange) {
    this.service.Mqtt.publish("zigbee2mqtt/" + this.device.name +"/set/brightness", event.value.toString())
    this.device.brightness = event.value;
  }

  setColorTemp(event: MatSliderChange) {
    this.service.Mqtt.publish("zigbee2mqtt/" + this.device.name +"/set/color_temp", event.value.toString())
    this.device.color_temp = event.value;
  }

  setEffect(option) {
      this.service.Mqtt.publish("zigbee2mqtt/" + this.device.name + "/set/effect", option)
  }
}
