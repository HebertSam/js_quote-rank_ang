import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a quote';

  quoteList = [];
  quotes = {
    author:"",
    quote:"",
    votes: 0
  }

  addQuote(){
    this.quoteList.push(this.quotes);
    console.log(this.quotes);
    this.quotes = {
      author:"",
      quote:"",
      votes: 0
    }
    // this.form.reset()
    
  }
}
