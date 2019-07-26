import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
  @Output() closeM = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  closeMenu() {
    this.closeM.emit();
  }
}
