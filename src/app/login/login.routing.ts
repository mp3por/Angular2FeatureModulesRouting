import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

export const ownComponents = [
    LoginComponent
];

const routes: Routes = [
  { path: '',
    component: LoginComponent,
    // children: [
    //   { path: '',    component: HeroListComponent },
    //   { path: ':id', component: HeroDetailComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
