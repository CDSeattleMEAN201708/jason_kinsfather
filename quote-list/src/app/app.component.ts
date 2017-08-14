import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes: Array<Quote>
  constructor() {
     this.quotes = []
  }
  addQuote(new_quote) {
      this.quotes.push(new_quote)
      this.quotes = this.rerankQuotes()
  }
  deleteQuote(index) {
      this.quotes.splice(index, 1)
  }
  rerankQuotes = () => {
      return this.quotes.sort((a, b) => {
          if (a.vote > b.vote) {
              return -1
          }
          if (a.vote < b.vote) {
              return 1
          }
          return 0
      });
  }
}
