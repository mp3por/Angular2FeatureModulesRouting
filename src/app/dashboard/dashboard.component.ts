import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    're-container':''
  }
})
export class DashboardComponent implements OnInit {

  constructor() { console.log('creating dashboard') }

  ngOnInit() {
  }

}
