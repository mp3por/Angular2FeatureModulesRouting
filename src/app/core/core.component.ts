import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  host: {
    're-container':''
  }
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
