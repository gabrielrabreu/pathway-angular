import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title: string;
  public isDisplayingNgxCharts: boolean;
  public isDisplayingNgxECharts: boolean;
  public isDisplayingHighCharts: boolean;

  constructor() {
    this.displayNgxCharts();
  }

  public displayNgxCharts(): void {
    this.title = 'NGX Charts';
    this.isDisplayingNgxCharts = true;
    this.isDisplayingNgxECharts = false;
    this.isDisplayingHighCharts = false;
  }

  public displayNgxECharts(): void {
    this.title = 'NGX ECharts';
    this.isDisplayingNgxECharts = true;
    this.isDisplayingNgxCharts = false;
    this.isDisplayingHighCharts = false;
  }

  public displayHighCharts(): void {
    this.title = 'HighCharts';
    this.isDisplayingHighCharts = true;
    this.isDisplayingNgxECharts = false;
    this.isDisplayingNgxCharts = false;
  }
}
