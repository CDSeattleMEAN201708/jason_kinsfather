import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string
  colors: Array<string>
  constructor() {
      this.colors = [];
      for (let i = 0; i < 10; i++) {
          this.colors.push(this.generateColor())
      }
  }

  generateColor = (): string => {
      let hexNum: string = "#"
      for (let j = 0; j < 3; j++) {
          let singleHex = Math.floor(Math.random() * 255).toString(16);
          singleHex.length === 1 ? hexNum = hexNum + "0" + singleHex : hexNum = hexNum + singleHex
      }
      return hexNum
  }
}
