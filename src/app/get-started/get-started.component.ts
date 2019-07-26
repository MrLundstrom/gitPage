import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
npm = `npm install archipelago --save`
reference =`<link rel="stylesheet" href="[location]/archipelago/css/index.css">`;
import=`@import "[location]/archipelago/archipelago.scss";`;
  constructor() { }

  ngOnInit() {
  }

}
