import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule, ownComponents } from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    ownComponents
  ]
})
export class LoginModule { }
