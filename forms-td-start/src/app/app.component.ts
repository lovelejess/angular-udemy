import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userNameForm') signupForm: NgForm;
  public defaultQuestion: String = "teacher";
  public questionAnswer: String = "";
  public suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // public onSubmit(form: NgForm) {
  //   console.log("submitted")
  //   console.log(form)
  // }

  public onSubmit() {
    console.log(this.signupForm);
  }
}
