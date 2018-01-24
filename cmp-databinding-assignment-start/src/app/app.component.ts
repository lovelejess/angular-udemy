import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isOddNumber: boolean = false;
  
  onCounterReceived(int: number) {
    this.isOddNumber = this.determineIsOdd(int);
  }

  determineIsOdd(int: number) {
    return int % 2 != 0;
  }
}
