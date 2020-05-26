import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'architech-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = this.intToWord(2);
  }

  public intToWord(value: number): string {
    if (value == 0) {
      return 'zero';
    }

    if (value == 1) {
      return 'one';
    }

    if (value == 2) {
      return 'two';
    }

    if (value == 3) {
      return 'three';
    }

    if (value == 4) {
      return 'four';
    }

    return 'no idea';
  }

}
