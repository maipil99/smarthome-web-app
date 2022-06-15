import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MqttService } from 'src/Services/Mqtt-service';
import {MatSliderChange} from '@angular/material/slider';
import {DashComponent} from "../dash/dash.component";

@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.component.html',
  styleUrls: ['./device-modal.component.css']
})

export class DeviceModalComponent implements OnInit {
  //gets the index of the device that should be controlled
  deviceId = sessionStorage.getItem('index');
  device = this.dash.deviceList[this.deviceId];
  title: string = this.device.name;
  options = ['breathe', 'blink', 'okay'];
  brightness = this.device.brightness;
  color_temp = this.device.color_temp;
  effect = this.device.effect;

  constructor(public dialogRef: MatDialogRef<DeviceModalComponent>, private mqttService: MqttService, private dash: DashComponent) {
  }
  /**
   * sets the value of the slider label
   * @param value 
   * @returns value
   */
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value);
    }
    return value;
  }

  ngOnInit(): void {
  }

  //close the pop-up 
  closeModal() {
    this.dialogRef.close();
  }

  /**
   * sets the state of the device
   * @param value 
   */
  setState(value) {
    if (value == "ON"){
      this.mqttService.Mqtt.publish("zigbee2mqtt/"+ this.device.name + "/set/state", "ON");
      this.device.state = "ON";
    }
    else{
      this.mqttService.Mqtt.publish("zigbee2mqtt/"+ this.device.name + "/set/state", "OFF")
      this.device.state = "OFF";
    }
  }

  /**
   * sets the brightness of a lamp
   * @param event 
   */
  setBrightness(event: MatSliderChange) {
    this.mqttService.Mqtt.publish("zigbee2mqtt/" + this.device.name +"/set/brightness", event.value.toString())
    this.device.brightness = event.value;
  }

  /**
   * Set the color temperature of a lamp
   * @param event 
   */
  setColorTemp(event: MatSliderChange) {
    this.mqttService.Mqtt.publish("zigbee2mqtt/" + this.device.name +"/set/color_temp", event.value.toString())
    this.device.color_temp = event.value;
  }

  /**
   * sets the effect on a lamp
   * @param option 
   */
  setEffect(option) {
      this.mqttService.Mqtt.publish("zigbee2mqtt/" + this.device.name + "/set/effect", option)
  }
}
