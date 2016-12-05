import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard';

import { LoginModule } from './login/login.module';

const routes: Routes = [
    // eagerly loaded module;
    { path: '', redirectTo: 'core', pathMatch: 'full'},

    // lazy loaded modules
    { path: 'login', loadChildren: () => LoginModule },

    // redirect any unmatched routes to /core
    { path: '**', redirectTo: 'core', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
