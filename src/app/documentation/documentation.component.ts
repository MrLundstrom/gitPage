import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  showMenu = false;
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  closeMenu() {
    this.showMenu = false;
  }

}
