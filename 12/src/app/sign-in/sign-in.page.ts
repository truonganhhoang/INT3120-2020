import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';

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

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private signInService: SignInService,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.signInSubscription?.unsubscribe();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  openForgotPasswordDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }

  handleSubmit() {
    if (this.signInForm.valid) {
      this.isSubmitting = true;
      this.signInSubscription = this.signInService
        .signInWithEmailAndPassword(this.email.value, this.password.value)
        .subscribe({
          next: (userJSON) => {
            this.storage.set('user', userJSON);
          },
          complete: () => {
            this.isSubmitting = false;
            this.router.navigateByUrl('/tabs/learn/courses');
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
