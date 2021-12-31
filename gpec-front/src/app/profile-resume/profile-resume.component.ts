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

  radarChartLabel: string[] = ['1', '2', '3', '4', '5'];
  radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabel,
    datasets: [{
      label: '',
      data: [100, 30, 50, 15, 92],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ]
    }]
  }
  radarChartType: ChartConfiguration<ChartType>['type'] = 'radar';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userGraph.subscribe((result: any) => {
      console.log(result)
    })

  }

}
