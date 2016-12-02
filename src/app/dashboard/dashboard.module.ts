import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WtfComponent } from './wtf/wtf.component';

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            // /dashboard/wtf
            { path: 'wtf', component: WtfComponent },

            // /dashboard/ redirects to wtf
            { path: '', redirectTo: 'wtf', pathMatch: 'full' },

            // handle all /dashboard/[unmatched] routes
            { path: '**', redirectTo: 'wtf', pathMatch: 'full' }
        ]
    }
];

const ownComponents = [
    DashboardComponent, WtfComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [
        ownComponents
    ],
    exports: []
})
export class DashboardModule { }
