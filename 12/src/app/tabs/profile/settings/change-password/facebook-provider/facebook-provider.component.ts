import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/core/services/firebase/auth/user.service';
import { mustEquals } from '../validators';

@Component({
  selector: 'app-settings-change-password-for-facebook-provider',
  templateUrl: './facebook-provider.component.html',
  styleUrls: ['./facebook-provider.component.scss']
})
export class SetPasswordForFacebookProviderComponent {
  isUpdating = false;

  setPasswordForm = this.formBuilder.group(
    {
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['']
    },
    {
      validators: [mustEquals('newPassword', 'confirmNewPassword', 'Passwords do not match.')]
    }
  );
  newPassword = this.setPasswordForm.get('newPassword');
  confirmNewPassword = this.setPasswordForm.get('confirmNewPassword');

  constructor(
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  private clear() {
    this.setPasswordForm.reset();
    this.newPassword.setErrors(null);
    this.confirmNewPassword.setErrors(null);
  }

  async handleSetPasswordForFacebookProvider() {
    if (this.setPasswordForm.valid) {
      this.isUpdating = true;
      try {
        await this.userService.setPassword(this.newPassword.value);
        const setPasswordSuccess = await this.toastController.create({
          message: 'Your password has been set.',
          duration: 3000,
          position: 'bottom',
          color: 'success'
        });
        await setPasswordSuccess.present();
        this.clear();
      } catch (err) {
        const setPasswordFailed = await this.toastController.create({
          message: err?.message,
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        await setPasswordFailed.present();
      } finally {
        this.isUpdating = false;
      }
    }
  }
}
