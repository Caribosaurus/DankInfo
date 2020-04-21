import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'g4vhz7' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: false,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http: HttpClient) {
    this.http.get('https://uz9t4q6y9j.execute-api.eu-west-1.amazonaws.com/prod/g4vhz7')
      .subscribe((data) => {
        this.lineChartData[0].data = data['y'];
        this.lineChartLabels = data['x'];
        }
      );


  }

  ngOnInit() {
  }

}
