import { Component, NgZone, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

declare var Auth0Lock;

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    're-container':''
  }
})
export class AppComponent {

  constructor() {}
}
