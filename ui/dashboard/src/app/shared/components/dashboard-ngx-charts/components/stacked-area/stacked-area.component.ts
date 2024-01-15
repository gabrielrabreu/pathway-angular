import { Component, Input } from '@angular/core';

import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-ngx-charts-stacked-area-chart',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.css']
})
export class DashboardNgxChartsStackedAreaComponent { 
  chartData = [];
  dashboard: any[];

  view: any[] = [700, 400];
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  public showSettings: boolean = false;
  public selectedCategory: string;

  @Input()
  public chartTitle: string;

  constructor(private dashboardService: DashboardService) {
    this.selectedCategory = 'All';
    this.dashboard = this.dashboardService.getForStackedArea();
    this.chartData = this.dashboard;
  }

  public toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  public categoryChanged(): void {
    if (this.selectedCategory == 'All') {
      this.chartData = this.dashboard;
    } else {
      this.chartData = this.dashboard.find(x => x.name == this.selectedCategory).childs;
    }
  }
}