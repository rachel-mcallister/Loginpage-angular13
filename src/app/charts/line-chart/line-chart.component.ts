import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType: ChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {
    console.log(this.lineChartData, "data");
  }

}
