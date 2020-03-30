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
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(8)]
  });

  fullName = this.signUpForm.get('fullName');
  email = this.signUpForm.get('email');
  password = this.signUpForm.get('password');

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
