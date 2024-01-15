import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { routes } from './home.routes';
import { DashboardNgxChartsModule } from '../../shared/components/dashboard-ngx-charts/dashboard-ngx-charts.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardNgxChartsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
