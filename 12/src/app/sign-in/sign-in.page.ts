import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInFailedComponent } from './sign-in-failed/sign-in-failed.component';
import { SignInService } from '../core/services/firebase/auth/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {
  hidePassword = true;
  isSubmitting = false;

  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  email = this.signInForm.get('email');
  password = this.signInForm.get('password');

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private signIn: SignInService) {}

  ngOnInit() {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  openForgotPasswordDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }

  handleSubmit() {
    if (this.signInForm.valid) {
      this.isSubmitting = true;
      this.signIn.signInWithEmailAndPassword(this.email.value, this.password.value).subscribe({
        next: console.log,
        complete: () => {
          this.isSubmitting = false;
          // go to main page
        },
        error: (message) => {
          this.isSubmitting = false;
          this.dialog.open(SignInFailedComponent, {
            data: {
              message: message
            }
          });
        }
      });
    }
  }
}
