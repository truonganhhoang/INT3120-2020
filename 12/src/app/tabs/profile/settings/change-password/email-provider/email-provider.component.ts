import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/core/services/firebase/auth/user.service';
import { mustEquals, mustNotEquals } from '../validators';

@Component({
  selector: 'app-settings-change-password-for-email-provider',
  templateUrl: './email-provider.component.html',
  styleUrls: ['./email-provider.component.scss']
})
export class ChangePasswordForEmailProviderComponent {
  isUpdating = false;

  // for those who authenticate by password
  changePasswordForm = this.formBuilder.group(
    {
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['']
    },
    {
      validators: [
        mustNotEquals('currentPassword', 'newPassword', 'New password must be different.'),
        mustEquals('newPassword', 'confirmNewPassword', 'Passwords do not match.')
      ]
    }
  );
  currentPassword = this.changePasswordForm.get('currentPassword');
  newPassword = this.changePasswordForm.get('newPassword');
  confirmNewPassword = this.changePasswordForm.get('confirmNewPassword');

  constructor(
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  private clear() {
    this.changePasswordForm.reset();
    this.currentPassword.setErrors(null);
    this.newPassword.setErrors(null);
    this.confirmNewPassword.setErrors(null);
  }

  async handleChangePasswordForEmailProvider() {
    if (this.changePasswordForm.valid) {
      this.isUpdating = true;
      try {
        await this.userService.updatePassword(this.currentPassword.value, this.newPassword.value);
        const updatePassword = await this.toastController.create({
          message: 'Your password has been updated',
          duration: 3000,
          position: 'bottom',
          color: 'success'
        });
        await updatePassword.present();
        this.clear();
      } catch (err) {
        const updatePasswordFailed = await this.toastController.create({
          message: err?.message ?? 'An error occured while updating password. Please try again',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        await updatePasswordFailed.present();
      } finally {
        this.isUpdating = false;
      }
    }
  }
}
