import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

const coreRoutes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full'},
  { path: 'core', component: CoreComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes)
  ],
  declarations: [CoreComponent],
  exports: [RouterModule]
})
export class CoreModule { }
