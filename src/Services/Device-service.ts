import { Injectable } from "@angular/core";
import { Device } from "src/Models/device";
import { Lamp } from "src/Models/Lamp";
import { MotionSensor } from "src/Models/MotionSensor";

@Injectable({
    providedIn: 'root'
  })

  export class DeviceService{
    public  Lamp1 = new Lamp("Lamp1", 100, 100, "ON", "Lamp")
    public MotionSensor = new MotionSensor("MotionSensor","true", "ON")
  
    public devices: Device[] = [
      {id: 1, name: this.Lamp1.topic, state: this.Lamp1.state},
      {id: 2, name: this.MotionSensor.topic, state: this.MotionSensor.state}];
      
      //getAll()
      public getAll(): Array<Device> {
          return this.devices;
        }
    }