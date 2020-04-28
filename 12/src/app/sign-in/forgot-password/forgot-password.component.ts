import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ForgotPasswordService } from '../../core/services/firebase/auth/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  email = new FormControl('', [Validators.required, Validators.email]);
  sendForgotPasswordEmailSubscription?: Subscription;
  dialogClosedSubscription?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    public toastController: ToastController,
    private forgotPasswordService: ForgotPasswordService
  ) {}

  ngOnInit() {
    this.dialogClosedSubscription = this.dialogRef.afterClosed().subscribe(() => {
      this.clear();
    });
  }

  ngOnDestroy() {
    this.sendForgotPasswordEmailSubscription?.unsubscribe();
    this.dialogClosedSubscription?.unsubscribe();
  }

  private clear() {
    this.email.setValue('');
    this.email.clearValidators();
  }

  handleSubmitForgotPassword() {
    if (this.email.valid) {
      this.sendForgotPasswordEmailSubscription = this.forgotPasswordService
        .sendPasswordResetEmail(this.email.value)
        .subscribe({
          next: () => {},
          complete: async () => {
            this.dialogRef.close();
            const toast = await this.toastController.create({
              message: 'Your reset password request has been sent. Please check your email',
              duration: 3000,
              position: 'bottom'
            });
            await toast.present();
          },
          error: async () => {
            const toast = await this.toastController.create({
              message: 'Failed while handling your request. Please try again.',
              duration: 3000,
              position: 'bottom',
              color: 'danger'
            });
            await toast.present();
          }
        });
    }
  }
}
