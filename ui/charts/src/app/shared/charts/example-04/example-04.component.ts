import { Component, ElementRef, ViewChild } from '@angular/core';

import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-example-04',
  templateUrl: './example-04.component.html',
  styleUrls: ['./example-04.component.css']
})
export class Example04Component {
  title = 'Highcharts + Angular 5 Demo';

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  
  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    };
  
    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  addSeries(){
    this.chart.addSeries({
      name:'Balram',
      data:[2,3,7]
    })    
  }
}
