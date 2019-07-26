import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  file = `<div class="form-item expand">
  <p class="add-on is-dark">
      <fa-icon icon="file" [fixedWidth]="true"></fa-icon>
  </p>
  <div class="file-upload expand">
      <input type="file" id="file" />
      <label for="file">choose a file</label>
  </div>
</div>`;
  radio = `<div class="form-item expand">
  <label class="radio expand">First radio
      <input type="radio" name="test">
      <span class="mark"></span>
  </label>
</div>
<div class="form-item">
  <label class="radio is-danger">Second radio
      <input type="radio" name="test">
      <span class="mark"></span>
  </label>
</div>`;
  check = `<div class="form-item">
  <label class="checkbox">First checkbox
      <input type="checkbox">
      <span class="mark"></span>
  </label>
</div>
<div class="form-item">
  <label class="checkbox is-warning">Second checkbox
      <input type="checkbox">
      <span class="mark"></span>
  </label>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
