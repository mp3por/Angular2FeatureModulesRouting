import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routing';
import { WTFModule } from './wtf/wtf.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutesModule,
    WTFModule,
  ],
  declarations: [
    DashboardComponent
  ],
  exports: []
})
export class DashboardModule { }
