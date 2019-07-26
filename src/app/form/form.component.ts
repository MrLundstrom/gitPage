import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = `<form>
  <h5>Small form!</h5>
  <div class="form-item expand">
      <input type="text" class="expand" placeholder="E-mail">
  </div>
  <div class="form-item">
      <button type="submit" class="is-success">Submit!</button>
  </div>
</form>`;

  constructor() { }

  ngOnInit() {
  }

}
