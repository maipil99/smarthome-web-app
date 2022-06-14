import { Component, Inject } from '@angular/core';
import { LinkqualityService } from 'src/Services/Linkquality-service';
import { ChartOptions, ChartType, ChartDataSets,} from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-linkquality-chart',
  templateUrl: './linkquality-chart.component.html',
  styleUrls: ['./linkquality-chart.component.css']
})
export class LinkqualityChartComponent {

  public lineChartData : ChartDataSets[] = [ { data: this.linkqualityservice.linkqualityData } ];
  public lineChartLabels: Label[] = ["Link Quality"];
  public lineChartOptions: ChartOptions  = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'black'
    },
  ];
  
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private linkqualityservice: LinkqualityService) {
    console.log(this.linkqualityservice.linkqualityData);
  }
}
