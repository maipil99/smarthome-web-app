import {AfterViewInit, Component, Injectable} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DeviceModalComponent } from '../device-modal/device-modal.component';
import { Service } from 'src/Models/Service';
import {Lamp} from "../../Models/Lamp";
import {MotionSensor} from "../../Models/MotionSensor";

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

  public service = new Service();
  public deviceList: any[] = this.service.devices;



  constructor(public matDialog: MatDialog) {


  }

  ngAfterViewInit(): void {
    //closes pop-up when you click anywhere else
   document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
      }


  }


  //Opens a pop-up window to control a Device
  openModal(i){
    this.dialogConfig.id = "device-modal-component";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    this.modalDialog = this.matDialog.open(DeviceModalComponent, this.dialogConfig);

     sessionStorage.setItem('index', i)

  }

  setState(value, i) {
    if (value == "ON"){
      this.service.Mqtt.publish("zigbee2mqtt/"+ this.deviceList[i].name + "/set/state", "ON");
      this.deviceList[i].state = "ON";
    }
    else{
      this.service.Mqtt.publish("zigbee2mqtt/"+ this.deviceList[i].name + "/set/state", "OFF")
      this.deviceList[i].state = "OFF";
    }

  }




  }

