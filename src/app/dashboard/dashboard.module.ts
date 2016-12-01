import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent}
];

const ownComponents = [
  DashboardComponent
];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [
    ownComponents
  ],
  exports: [
    RouterModule,
    ownComponents
  ]
})
export class DashboardModule { }
