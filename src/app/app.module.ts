import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './auth-guard';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,

    CoreModule,
    LoginModule
  ],
  providers: [
    {
      provide: AuthConfig,
      useFactory: () => {
        return new AuthConfig();
      },
      deps: [Http]
    },
    AuthHttp,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
