import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>, public toastController: ToastController) {}

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(() => {
      this.clear();
    });
  }

  private clear() {
    this.email.setValue('');
    this.email.clearValidators();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async handleSubmitForgotPassword() {
    if (this.email.valid) {
      this.dialogRef.close();
      const toast = await this.toastController.create({
        message: 'Sent request. Please check your email',
        duration: 5000
      });
      toast.present();
    }
  }
}
