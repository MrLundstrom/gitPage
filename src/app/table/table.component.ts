import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  normal = `<table class="table">
  <tbody>
      <tr>
          <th>First Category</th>
          <th>Second Category</th>
          <th>Third Category</th>
      </tr>
      <tr>
          <td>First column</td>
          <td>Second column</td>
          <td>Third column</td>
      </tr>
      <tr>
          <td>First column</td>
          <td>Second column</td>
          <td>Third column</td>
      </tr>
  </tbody>
</table>`;
  responsive = `<table class="table is-tablet">
  ...
</table>
<table class="table is-desktop">
  ...
</table>`;
  sizing = `<table class="table is-tablet">
  <tbody>
      <tr>
          <th class="is-6">is-6 (1/2)</th>
          <th>(automatic)</th>
          <th class="is-2">(is-2) (1/6)</th>
      </tr>
      <tr>
          <td>First column</td>
          <td>Second column</td>
          <td>Third column</td>
      </tr>
      <tr>
          <td>First column</td>
          <td>Second column</td>
          <td>Third column</td>
      </tr>
  </tbody>
</table>`;
  constructor() { }

  ngOnInit() {
  }

}
