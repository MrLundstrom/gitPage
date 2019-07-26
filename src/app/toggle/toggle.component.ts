import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  toggles = `<p class="toggle">...</p>
  <p class="toggle is-tablet">...</p>
  <p class="toggle is-desktop">...</p>`
  showToggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.showToggle = !this.showToggle;
  }
}
