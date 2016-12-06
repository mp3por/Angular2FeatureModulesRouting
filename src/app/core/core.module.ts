import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardRoutesModule } from '../dashboard/dashboard.routing';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { CoreRoutingModule, ownComponents }  from './core.routing';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    ...ownComponents
  ],
  exports: []
})
export class CoreModule { }
