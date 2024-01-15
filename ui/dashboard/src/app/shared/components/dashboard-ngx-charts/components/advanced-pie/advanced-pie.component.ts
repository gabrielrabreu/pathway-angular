import { Component, Input } from '@angular/core';

import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-ngx-charts-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.css']
})
export class DashboardNgxChartsAdvancedPieComponent { 
  chartData = [];
  dashboard: any;

  view: any[] = [700, 400];
  gradient: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  public showSettings: boolean = false;
  public selectedCategory: string;

  @Input()
  public chartTitle: string;

  constructor(private dashboardService: DashboardService) {
    this.selectedCategory = 'All';
    this.dashboard = this.dashboardService.getForAdvancedPie();
    this.chartData = this.dashboard.values;
  }

  public toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  public categoryChanged(): void {
    if (this.selectedCategory == 'All') {
      this.chartData = this.dashboard.values;
    } else {
      this.chartData = this.dashboard.values.find(x => x.name == this.selectedCategory).values;
    }
  }
}