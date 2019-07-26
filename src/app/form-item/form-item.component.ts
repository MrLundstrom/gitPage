import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  addOn = `<div class="form-item">
  <p class="add-on is-link">
      <fa-icon icon="calculator" [fixedWidth]="true"></fa-icon>
  </p>
  <input type="text" placeholder="Number">
  <button type="button" class="add-on is-link">
      <fa-icon icon="plus" [fixedWidth]="true"></fa-icon>
      add
  </button>
</div>`;

  expand = `<div class="form-item expand">
  <p class="add-on is-link">
      <fa-icon icon="envelope" [fixedWidth]="true"></fa-icon>
  </p>
  <input type="text" class="expand" placeholder="E-mail">
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
