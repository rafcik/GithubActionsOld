import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'architech-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const a = 2;

    if (a == 4) {
      console.log('its four');
    } else {
      console.log('its not four');
    }
  }
}
