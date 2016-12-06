import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    're-container': ''
  }
})
export class DashboardComponent implements OnInit {

  constructor() {
    let omg = ['1','2'];
    let omg2 = ['3'];
    console.log(omg);
    console.log(omg2);
    console.log('--------');
    console.log(['1','2',omg]);
    console.log(['1','2',...omg2]);
  }

  ngOnInit() {
  }

}
