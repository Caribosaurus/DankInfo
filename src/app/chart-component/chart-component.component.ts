import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiService} from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.lineChartData[0].label = params['id'];
      this.apiService.getCustomerById(params['id'])
        .subscribe((data) => {
            this.lineChartData[0].data = data['y'];
            this.lineChartLabels = data['x'];
          }
        ); // (+) converts string 'id' to a number
    ​
      // In a real app: dispatch action to load the details here.
    });


  }

}
