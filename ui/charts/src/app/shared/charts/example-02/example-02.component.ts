import { Component } from '@angular/core';

import { singleNgxChart } from '../../utils/data';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-example-02',
  templateUrl: './example-02.component.html',
  styleUrls: ['./example-02.component.css']
})
export class Example02Component {
  legend: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'X Label';
  yAxisLabel: string = 'Y Label';
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  timeline: boolean = true;
  colorScheme = { domain: Utils.colors({count: singleNgxChart.length}) };
  data = singleNgxChart;
}
