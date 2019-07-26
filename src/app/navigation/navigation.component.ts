import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showMenu: boolean = false;

  header = `<div class="header is-white is-sticky">
  <div class="container between">
      <a class="header-item">Header-item</a>
      <div class="header-menu">
          <div class="header-dropdown">
              <a class="header-item">
                  <p>Dropdown</p>
              </a>
              <div class="dropdown">
                  <a class="header-item">Option 1</a>
                  <a class="header-item">Option 2</a>
              </div>
          </div>
      </div>
      <a class="header-toggle">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </a>
  </div>
</div>`;

  active = `<div class="header is-white is-active">
 <div class="container between">
      ...
     <div class="header-menu">
      ...
     </div>
     <a class="header-toggle" is-active>
         <span class="line"></span>
         <span class="line"></span>
         <span class="line"></span>
     </a>
 </div>
</div>`;

  color = `<div class="header is-white">
  ...
</div`;
  gradient = `<div class="header is-danger gradient">
  ...
</div`;


  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
