import { Component } from '@angular/core';

import { multiNgxChart } from '../../utils/data';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-example-01',
  templateUrl: './example-01.component.html',
  styleUrls: ['./example-01.component.css']
})
export class Example01Component {
  legend: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'X Label';
  yAxisLabel: string = 'Y Label';
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  timeline: boolean = true;
  colorScheme = { domain: Utils.colors({count: multiNgxChart.length}) };
  data = multiNgxChart;
}
