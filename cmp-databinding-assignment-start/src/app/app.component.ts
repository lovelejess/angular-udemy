import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isEvenNumber: boolean = false;
  
  onCounterReceived(int: number) {
    this.isEvenNumber = this.determineIsEven(int);
  }

  determineIsOdd(int: number) {
    return int % 2 != 0;
  }

  determineIsEven(int: number) {
    return int % 2 == 0;
  }
}
