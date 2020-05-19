import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInFailedComponent } from './sign-in-failed/sign-in-failed.component';
import { SignInService } from '../core/services/firebase/auth/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnDestroy {
  hidePassword = true;
  isSubmitting = false;

  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  email = this.signInForm.get('email');
  password = this.signInForm.get('password');

  signInSubscription?: Subscription;
  signInWithFacebookSubscription?: Subscription;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private signInService: SignInService,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.signInSubscription?.unsubscribe();
    this.signInWithFacebookSubscription?.unsubscribe();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  openForgotPasswordDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }

  goToIntro() {
    this.router.navigate(['/intro']);
  }

  private clearForm() {
    this.signInForm.reset();
    this.signInForm.controls.email.setErrors(null);
    this.signInForm.controls.password.setErrors(null);
  }

  handleLogin() {
    if (this.signInForm.valid) {
      this.isSubmitting = true;
      this.signInSubscription = this.signInService
        .signInWithEmailAndPassword(this.email.value, this.password.value)
        .subscribe({
          next: () => {
            this.clearForm();
          },
          complete: () => {
            this.isSubmitting = false;
            this.router.navigate(['/tabs/learn/courses'], { replaceUrl: true });
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

  handleLoginWithFacebook() {
    this.signInWithFacebookSubscription = this.signInService.signInWithFacebook().subscribe({
      next: () => {
        this.clearForm();
      },
      complete: () => {
        this.isSubmitting = false;
        this.router.navigate(['/tabs/learn/courses'], { replaceUrl: true });
      },
      error: (err) => {
        this.isSubmitting = false;
        this.dialog.open(SignInFailedComponent, {
          data: {
            message: err?.message
          }
        });
      }
    });
  }
}
