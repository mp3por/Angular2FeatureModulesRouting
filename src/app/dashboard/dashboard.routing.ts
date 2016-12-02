import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WtfComponent } from './wtf/wtf.component';

const ownComponents = [
    DashboardComponent, WtfComponent
];

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            // // /dashboard/ redirects to wtf
            { path: '', redirectTo: 'wtf' , pathMatch: 'full'},

            // /dashboard/wtf
            { path: 'wtf', component: WtfComponent },

            
        ],
    },
    // // handle all /dashboard/[unmatched] routes
    { path: '**', redirectTo: 'wtf', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class DashboardRoutesModule { }