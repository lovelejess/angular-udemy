import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('subscriptionForm') subscriptionForm: NgForm;
  public defaultSubscription: String = "Advanced";
  
  public onSubmit(): void {
    console.log(`form: ${this.subscriptionForm}`);
    console.log(`email: ${this.subscriptionForm.value.email}`);
    console.log(`subscription: ${this.subscriptionForm.value.subscription}`);
  }
}
