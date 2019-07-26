import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  color = `<p class="text-danger">...<p>`;
  quote = `<p class="quote">...<p>`;
  font = `<link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">`
  align = `<p class="left-text">left</p>
<p class="center-text">center</p>
<p class="right-text">right</p>`
  constructor() { }

  ngOnInit() {
  }

}
