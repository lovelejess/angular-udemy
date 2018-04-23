import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userNameForm') signupForm: NgForm;
  public submitted: boolean = false;
  public defaultQuestion: String = "teacher";
  public questionAnswer: String = "";
  public pronouns: String[] = ["male", "female", "non-binary", "prefer not to say"];
  public user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    pronoun: '' 
  };
  public suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // public onSubmit(form: NgForm) {
  //   console.log("submitted")
  //   console.log(form)
  // }

  public onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.pronoun = this.signupForm.value.pronoun;
  }
}
