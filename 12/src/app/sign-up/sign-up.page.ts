import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { SignUpService } from '../core/services/firebase/auth/sign-up.service';
import { SignUpFailedComponent } from './sign-up-failed/sign-up-failed.component';
import { SignInService } from '../core/services/firebase/auth/sign-in.service';

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
    private signInService: SignInService,
    private storage: Storage
  ) {}

  ngOnDestroy() {
    this.signUpSubscription?.unsubscribe();
    this.signInWithFacebookSubscription?.unsubscribe();
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToIntro() {
    this.router.navigate(['intro']);
  }

  handleSignUp() {
    if (this.signUpForm.valid) {
      this.isSubmitting = true;
      this.signUpSubscription = this.signUpService
        .signUpWithEmailAndPassword(this.email.value, this.password.value, this.fullName.value)
        .subscribe({
          next: () => {},
          error: (err: string) => {
            this.isSubmitting = false;
            this.dialog.open(SignUpFailedComponent, {
              data: {
                message: err
              }
            });
          },
          complete: async () => {
            this.isSubmitting = false;
            await this.router.navigateByUrl('/sign-in');
            const accountCreated = await this.toastController.create({
              message: 'Account has been created successfully',
              duration: 3000
            });
            await accountCreated.present();
          }
        });
    }
  }

  handleLoginWithFacebook() {
    this.signInWithFacebookSubscription = this.signInService.signInWithFacebook().subscribe({
      next: (userJSON) => {
        this.storage.set('user', userJSON);
      },
      complete: () => {
        this.isSubmitting = false;
        this.router.navigateByUrl('/tabs/learn/courses');
      },
      error: async (err) => {
        const loginFacebookFailed = await this.toastController.create({
          message: err?.message,
          duration: 3000
        });
        await loginFacebookFailed.present();
      }
    });
  }
}
