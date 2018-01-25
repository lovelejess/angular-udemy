import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isEvenNumber: boolean = null;
  public odds: string[] = [];
  public evens: string[] = [];
  
  onCounterReceived(int: number) {
    this.isEvenNumber = this.determineIsEven(int);
    if(this.isEvenNumber) {
      this.evens.push(int.toString())
    }
    else {
      this.odds.push(int.toString());
    }
  }

  determineIsEven(int: number) {
    return int % 2 == 0;
  }
}
