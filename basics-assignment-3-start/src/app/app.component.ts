import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  buttonClicks: string[] = [];
  clickCount: number = 0;

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickCount++;
    this.buttonClicks.push("button clicked " + this.clickCount + " times");
  }

  getColor() {
    return this.clickCount == 5 ? "blue" : "white";
  }

  isGreaterThanFive() {
    return this.clickCount > 5 ? true: false
  }

}
