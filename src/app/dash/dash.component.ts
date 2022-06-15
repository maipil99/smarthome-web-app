import {AfterViewInit, Component, Injectable} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DeviceModalComponent } from '../device-modal/device-modal.component';
import { DeviceService } from 'src/Services/Device-service';
import { MqttService } from 'src/Services/Mqtt-service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})

export class DashComponent implements AfterViewInit {

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<DeviceModalComponent, any> | undefined;

  public deviceService = new DeviceService();
  public deviceList: any[] = this.deviceService.devices;

  constructor(public matDialog: MatDialog, private mqttClient: MqttService) { }

  ngAfterViewInit(): void {

    //close pop-up when you click anywhere else
   document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
    }
  }

  //Opens a pop-up window to control a Device
  openModal(){
    this.dialogConfig.id = "device-modal-component";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.modalDialog = this.matDialog.open(DeviceModalComponent, this.dialogConfig);
  }

  //get the index of the current object to be controlled in the pop-up
  getDevice(i){
    sessionStorage.setItem('index', i)
  }

  /**
   * sets the state of a lamp
   * @param value 
   * @param i 
   */
  setState(value, i) {
    if (value == "ON"){
      this.mqttClient.Mqtt.publish("zigbee2mqtt/"+ this.deviceList[i].name + "/set/state", "ON");
      this.deviceList[i].state = "ON";
    } 
    else{
      this.mqttClient.Mqtt.publish("zigbee2mqtt/"+ this.deviceList[i].name + "/set/state", "OFF")
      this.deviceList[i].state = "OFF";
    }
  }

  }

