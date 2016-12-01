import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    're-container':''
  }
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
