import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {
  hidePassword = true;

  signUpForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.minLength(8)]
  });

  fullName = this.signUpForm.controls.fullName;
  email = this.signUpForm.controls.email;
  password = this.signUpForm.controls.password;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  handleSubmit() {
    if (this.signUpForm.valid) {
      //
    }
  }
}
