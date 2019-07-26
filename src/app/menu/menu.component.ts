import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = `<div class="menu">
  <ul class="menu-items">
      <li class="menu-title">Title</li>
      <li class="menu-item"><a>Menu-item</a></li>
      <li class="menu-item"><a>Menu-item</a></li>
      <li class="sub-items">
          <ul class="menu-items">
              <li class="menu-item"><a>Menu-item</a></li>
              <li class="menu-item"><a>Menu-item</a></li>
          </ul>
      </li>
  </ul>
</div>`;
  submenu = `<div class="menu">
<ul class="menu-items">
    <li class="menu-title">Title</li>
    <li class="menu-item"><a>Menu-item</a></li>
    <li class="menu-item"><a>Menu-item</a></li>
    <li class="sub-items">
        <ul class="menu-items">
            <li class="menu-title">Title</li>
            <li class="menu-item"><a>Menu-item</a></li>
            <li class="menu-item"><a>Menu-item</a></li>
            <li class="sub-items">
                <ul class="menu-items">
                    <li class="menu-title">Title</li>
                    <li class="menu-item"><a>Menu-item</a></li>
                    <li class="menu-item"><a>Menu-item</a></li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
</div>`;

  constructor() { }

  ngOnInit() {
  }
}
