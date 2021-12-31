import { Component, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import {Chart} from "node_modules/chart.js";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile-resume',
  templateUrl: './profile-resume.component.html',
  styleUrls: ['./profile-resume.component.css']
})
export class ProfileResumeComponent implements OnInit {

  radarChartOptions = {
    responsive: true,
  };

  radarChartLabel: string[] = [];
  dataSet: number[] = [];
  radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabel,
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ]
    }]
  }
  radarChartType: ChartConfiguration<ChartType>['type'] = 'radar';


  constructor(private userService: UserService) { }

  ngOnInit(): void {

    let myChart;
    this.userService.userGraph.subscribe((result: any) => {
      this.radarChartLabel = result.data.map((item: any) => item.categorie);
      this.dataSet = result.data.map((item: any) => item.sum_value );
      this.radarChartData.datasets[0].data = this.dataSet;
      myChart = new Chart('myChart', {
        type: 'pie',
        data: {
          labels: this.radarChartLabel,
          datasets: [{
            label: '',
            data: this.dataSet,

          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'bottom',
              align: 'start'
            }
          },
          scales: {
            xAxes: {
              ticks: {
                mirror: true
              }
            },
          }
        }
      })
    })

  }

}
