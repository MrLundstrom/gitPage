import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  image = `<div class="margin-1">
  <div class="image is-2x3">
      <img src="../../assets/water.jpg">
  </div>
</div>
<p class="info">image text</p>`
  roundImage = `<div class="image is-4x4 is-rounded">
  <img class="cover" src="../../assets/water.jpg">
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
