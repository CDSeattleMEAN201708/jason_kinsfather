import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() quote: Quote
  @Output() votesUpdated = new EventEmitter()
  @Output() deleteButtonPressed = new EventEmitter()

  constructor() { }
  ngOnInit() { }
  updateQuoteRank = () => {
      this.votesUpdated.emit()
  }
  deleteQuote = () => {
      this.deleteButtonPressed.emit()
  }

}
