import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'core', loadChildren: () => CoreModule },
  // { path: '', redirectTo: 'core', pathMatch:'full'},
  { path: '**', redirectTo: 'core' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
