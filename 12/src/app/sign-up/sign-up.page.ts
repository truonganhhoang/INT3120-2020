import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ToastController } from '@ionic/angular';

import { SignUpService } from '../core/services/firebase/auth/sign-up.service';
import { SignUpFailedComponent } from './sign-up-failed/sign-up-failed.component';
import { SignInService } from '../core/services/firebase/auth/sign-in.service';
import { UserService } from '../core/services/firebase/auth/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnDestroy {
  hidePassword = true;
  isSubmitting = false;

  signUpForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  fullName = this.signUpForm.get('fullName');
  email = this.signUpForm.get('email');
  password = this.signUpForm.get('password');

  signUpSubscription?: Subscription;
  signInWithFacebookSubscription?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private dialog: MatDialog,
    private signUpService: SignUpService,
    private signInService: SignInService
  ) {}

  ngOnDestroy() {
    this.clearForm();
    this.signUpSubscription?.unsubscribe();
    this.signInWithFacebookSubscription?.unsubscribe();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToIntro() {
    this.router.navigate(['/intro']);
  }

  private clearForm() {
    this.signUpForm.reset();
    this.signUpForm.controls.fullName.setErrors(null);
    this.signUpForm.controls.email.setErrors(null);
    this.signUpForm.controls.password.setErrors(null);
  }

  handleSignUp() {
    if (this.signUpForm.valid) {
      this.isSubmitting = true;
      this.signUpSubscription = this.signUpService
        .signUpWithEmailAndPassword(this.email.value, this.password.value, this.fullName.value)
        .subscribe({
          next: () => {
            this.clearForm();
          },
          complete: () => {
            this.isSubmitting = false;
            this.router.navigate(['/tabs/learn/courses'], { replaceUrl: true, state: { fromSignUp: true } });
          },
          error: (err: string) => {
            this.isSubmitting = false;
            this.dialog.open(SignUpFailedComponent, {
              data: {
                message: err
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
        this.router.navigate(['/tabs/learn/courses'], { replaceUrl: true, state: { fromSignUp: true } });
      },
      error: async (err) => {
        this.isSubmitting = false;
        const loginFacebookFailed = await this.toastController.create({
          message: err?.message ?? 'An error occurred while signing in with facebook. Please try again.',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        await loginFacebookFailed.present();
      }
    });
  }
}
