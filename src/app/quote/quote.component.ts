import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote

  constructor() { }

  ngOnInit() {
  }
  upVote(){
    this.quote.votes += 1;
  }
  downVote(){
    this.quote.votes -= 1;
  }
}
