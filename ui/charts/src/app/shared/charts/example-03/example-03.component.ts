import { Component } from '@angular/core';

@Component({
  selector: 'app-example-03',
  templateUrl: './example-03.component.html',
  styleUrls: ['./example-03.component.css']
})
export class Example03Component {
  chartOption = {
    title: {
      text: 'Mensal Comparative'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['England','Spain','Germany','USA','Brazil']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'England',
        type:'line',
        stack: 'counts',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'Spain',
        type:'line',
        stack: 'counts',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'Germany',
        type:'line',
        stack: 'counts',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'USA',
        type:'line',
        stack: 'counts',
        areaStyle: {normal: {}},
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'Brazil',
        type:'line',
        stack: 'counts',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {normal: {}},
        data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
}
