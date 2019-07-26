import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  splash = `<div class="splash is-link is-50 gradient">
  <div class="container">
    <div class="content">
        ...
    </div>
  </div>
</div>`
  constructor() { }

  ngOnInit() {
  }

}
