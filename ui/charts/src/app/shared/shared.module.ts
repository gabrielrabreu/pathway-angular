import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgxEchartsModule } from 'ngx-echarts';

import { Example01Component } from './charts/example-01/example-01.component';
import { Example02Component } from './charts/example-02/example-02.component';
import { Example03Component } from './charts/example-03/example-03.component';
import { Example04Component } from './charts/example-04/example-04.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    NgxEchartsModule
  ],
  declarations: [Example01Component, Example02Component, Example03Component, Example04Component],
  exports: [Example01Component, Example02Component, Example03Component, Example04Component]
})
export class SharedModule { }
