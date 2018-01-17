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

  getColor(index: number) {
    return index >= 4 ? "blue" : "white";
  }

  getFontColor(index: number) {
    return index >= 4 ? true : false;
  }
}
