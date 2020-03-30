import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

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

  email = this.signInForm.get('email');
  password = this.signInForm.get('password');

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  openDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }

  handleSubmit() {
    if (this.signInForm.valid) {
      //
    }
  }
}
