import { Component } from '@angular/core';
import {ChartDataset, ChartType, ChartOptions} from "chart.js";
import {Color} from "chart.js";
import {MatLabel} from "@angular/material/form-field";


@Component({
  selector: 'app-linkquality-chart',
  templateUrl: './linkquality-chart.component.html',
  styleUrls: ['./linkquality-chart.component.css']
})
export class LinkqualityChartComponent {
  public lineChartData: { data: number[]; label: string }[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: MatLabel[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [

  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }
}
