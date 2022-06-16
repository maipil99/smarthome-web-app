import { Component, Inject, OnInit } from '@angular/core';
import { LinkqualityService } from 'src/Services/Linkquality-service';
import { ChartOptions, ChartType, ChartDataSets, } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MqttService } from 'src/Services/Mqtt-service';


@Component({
  selector: 'app-linkquality-chart',
  templateUrl: './linkquality-chart.component.html',
  styleUrls: ['./linkquality-chart.component.css']
})
export class LinkqualityChartComponent implements OnInit {
  public linkquality = this.linkqualityservice.linkquality;
  public linkqualityData = this.linkqualityservice.linkqualityData;

  public lineChartData: ChartDataSets[] = [{ data: this.linkqualityData }];
  public lineChartLabels: Label[] = ["Link Quality"];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'black'
    },
  ];

  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private linkqualityservice: LinkqualityService, private mqttService: MqttService) {
    console.log(this.linkqualityData);

  }

  /**
   * recieves a message from the lamp topic, and extracts the link quality of each publish
   */
  ngOnInit(): void {
    this.mqttService.Mqtt.on('message', (topic, payload) => {
      let messageObj = JSON.parse(payload.toString())

      this.linkquality = messageObj.linkquality;
      this.linkqualityData.push([this.linkquality])

      console.log(this.linkquality)
    });
  }
}
