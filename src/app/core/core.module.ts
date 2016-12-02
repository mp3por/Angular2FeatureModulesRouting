import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { TestComponent } from './test.component';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { CoreRoutingModule, ownComponents, eagerlyRoutedModules }  from './core.routing';

@NgModule({
  imports: [
    CommonModule,

    eagerlyRoutedModules,

    CoreRoutingModule
  ],
  declarations: [
    ownComponents
  ],
  exports: []
})
export class CoreModule { }
