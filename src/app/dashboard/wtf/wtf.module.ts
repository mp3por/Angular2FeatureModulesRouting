import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { WtfComponent } from './wtf.component';

const wtfRoutes: Routes = [
    { path: 'wtf', component: WtfComponent }
]

const wtfRouting = RouterModule.forChild(wtfRoutes);


@NgModule({
  imports: [
    CommonModule,
    wtfRouting
  ],
  declarations: [
    WtfComponent
  ],
  exports: [
    RouterModule
  ]
})
export class WTFModule { }
