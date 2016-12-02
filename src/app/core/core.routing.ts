
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

            // eagerly
            // { path: 'dashboard', loadChildren: () => DashboardModule},

            // default path redirects to dashboard
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

            // handle all /core/[unmatched] routes
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
















































// const coreRoutes: Routes = [
//       { path:'core', component: CoreComponent }



      // {
      //   path: '',
      //   // pathMatch: 'full',
      //   component: CoreComponent,
      //   children: [
      //     { path: 'dashboard', loadChildren: () => DashboardModule },
      //     // { path: '', redirectTo: 'dashboard'}
      //   ]
      // },
      // { path: '**', redirectTo: 'dashboard'}


//   { path: '', redirectTo: 'core', pathMatch: 'full' },
//   {
//     path: 'core',
//     component: CoreComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },
//       {
//         path: 'dashboard',
//         children: [...dashboardRoutes]
//       },
//       {
//         path: 'test',
//         component: TestComponent
//       }
//     ]
//   }
// ];
