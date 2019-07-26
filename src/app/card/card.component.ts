import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card = `<div class="card margin-1">
  <div class="card-header is-main">
    ...
  </div>
  <div class="card-content">
    ...
  </div>
  <div class="card-footer is-main">
    ...
  </div>
</div>`;
  imageCard = `<div class="card image margin-1">
  <img src="../../assets/water.jpg">
  <div class="card-content">
      ...
  </div>
</div>`

  constructor() { }

  ngOnInit() {
  }

}
