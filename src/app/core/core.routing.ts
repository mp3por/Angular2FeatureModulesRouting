
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { TestComponent } from './test.component';

import { DashboardModule } from '../dashboard/dashboard.module';
import { TransactionsModule } from '../transactions/transactions.module';


export const eagerlyRoutedModules = [
    DashboardModule
];

export const ownComponents = [
    CoreComponent,
    TestComponent
];

const coreRoutes: Routes = [
    {
        // /core route will be the CoreComponent
        path: 'core',
        component: CoreComponent,
        children: [
            // lazy
            { path: 'transactions', loadChildren: () => TransactionsModule },
            { path: 'dashboard', loadChildren: () => DashboardModule },
            // default path redirects to dashboard
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    },
    

    // handle all /core/[unmatched] routes
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
