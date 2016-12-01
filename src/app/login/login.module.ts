import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule { }
