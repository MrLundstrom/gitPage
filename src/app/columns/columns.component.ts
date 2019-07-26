import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  constructor() { }
  regular = `<div class="columns padding-1 margin-1">
  <div class="column padding-1">
      ...
  </div>
  <div class="column padding-1">
      ...
  </div>
  <div class="column padding-1">
      ...
  </div>
</div>`;
  tablet = `<div class="columns is-tablet padding-1 margin-1">
  ...
</div>`;

  mobile = `<div class="columns is-mobile padding-1 margin-1">
  ...
</div>`;
  columns = `<div class="columns padding-1 margin-1">
  <div class="column padding-1 is-2">
      ...
  </div>
  <div class="column padding-1 is-4">
      ...
  </div>
  <div class="column padding-1">
      ...
  </div>
</div>`;
  offset = `<div class="columns padding-1 margin-1">
  <div class="column padding-1 is-6 is-offset-6">
      ...
  </div>
</div>`;
  nested = `<div class="columns is-tablet padding-1 margin-1">
  <div class="column padding-1 is-6">
    ...
  </div>
  <div class="columns is-tablet">
      <div class="column padding-1 is-6">
          ...
      </div>
      <div class="column padding-1 is-6">
          ...
      </div>
  </div>
</div>`;

  ngOnInit() {
  }

}
