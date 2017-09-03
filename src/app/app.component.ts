import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday = new Date(1991 , 6 , 30);
  toggle: boolean;
  data: any[];
  constructor() {
    this.data = [];
  }
  get format(){
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleDateFormat() {
    this.toggle = !this.toggle;
  }
}
