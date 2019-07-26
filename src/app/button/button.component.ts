import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  button = `<button class="is-main">button</button>`;
  group = `<div class="button-group">
  <button class="button is-main">button</button>
  <button class="button is-main">button</button>
  <button class="button is-main">button</button>
</div>`;
  buttons = `<div class="buttons">
  <button class="button is-main">button</button>
  <button class="button is-main">button</button>
  <button class="button is-main">button</button>
</div>`;
  colors = `<button class="button is-main">button</button>
<button class="button is-secondary">button</button>
<button class="button is-danger">button</button>
<button class="button is-warning">button</button>
<button class="button is-success">button</button>
<button class="button is-link">button</button>
<button class="button is-white">button</button>
<button class="button is-light">button</button>
<button class="button is-dark">button</button>
<button class="button is-black">button</button>`;

  size = `<button class="button is-main is-large">Large</button>
<button class="button is-main">Large</button>
<button class="button is-main is-small">Large</button>
`;
expand = `<button class="is-main expand">button</button>
<div class="button-group expand">
    <button class="button is-main">button</button>
    <button class="button is-main">button</button>
    <button class="button is-main">button</button>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
