import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  code = `<div class="column center-text center">
  <h2>h2</h2>
</div>`

  constructor() { }

  ngOnInit() {
  }

}
