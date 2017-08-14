import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from './../quote'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() createQuote = new EventEmitter()
  new_quote: Quote
  constructor() { }

  ngOnInit() {
     this.new_quote = new Quote()
  }

  submitQuote() {
      this.createQuote.emit(this.new_quote)
      this.new_quote = new Quote()

  }
}
