import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {
  hidePassword = true;

  signInForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required]
  });

  email = this.signInForm.controls.email;
  password = this.signInForm.controls.password;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  handleSubmit() {
    if (this.signInForm.valid) {
      //
    }
  }
}
