import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DASHBOARD_ROUTING } from './dashboard.router';

// const DASHBOARD_IMPORTS = [DashBoardRoutingModule];

@NgModule({
  imports: [
    CommonModule,
    DASHBOARD_ROUTING
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
