import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { TestComponent } from './test.component';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { DashboardModule, dashboardRoutes } from '../dashboard/dashboard.module';

const featureModules = [
  DashboardModule
]

const ownComponents = [
  CoreComponent,
  TestComponent
]

const coreRoutes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  {
    path: 'core',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        children: [...dashboardRoutes]
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    featureModules,

    RouterModule.forChild(coreRoutes),
  ],
  declarations: [
    ownComponents
  ],
  exports: [
    featureModules
  ]
})
export class CoreModule { }
