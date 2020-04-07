import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ToastController } from '@ionic/angular';

import { SignUpService } from '../services/firebase/sign-up.service';
import { SignUpFailedComponent } from './sign-up-failed/sign-up-failed.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage {
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

  constructor(
    private formBuilder: FormBuilder,
    private signUp: SignUpService,
    private toastController: ToastController,
    private router: Router,
    private dialog: MatDialog
  ) {}

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  handleSubmit() {
    if (this.signUpForm.valid) {
      this.isSubmitting = true;
      // next, error and complete
      this.signUp.signUpWithEmailAndPassword(this.email.value, this.password.value, this.fullName.value).subscribe({
        next: () => {},
        error: () => {
          this.isSubmitting = false;
          this.dialog.open(SignUpFailedComponent);
        },
        complete: () => {
          this.isSubmitting = false;
          this.router.navigateByUrl('/sign-in');
          this.toastController
            .create({
              message: 'Account has been created successfully',
              duration: 2000
            })
            .then((toast) => toast.present());
        }
      });
    }
  }
}
