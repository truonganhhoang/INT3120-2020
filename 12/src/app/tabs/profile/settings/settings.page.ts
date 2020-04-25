import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'firebase/app';

import { ToastController, ModalController, Platform } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserService } from '../../../core/services/firebase/auth/user.service';
import { SignOutService } from '../../../core/services/firebase/auth/sign-out.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit, OnDestroy {
  userInfoSubscription?: Subscription;
  signOutSubscription?: Subscription;
  versionString: string;
  isSendingEmail: boolean;
  currentUser?: User;
  isMobile: boolean;

  constructor(
    private platform: Platform,
    private router: Router,
    private userService: UserService,
    private signOutService: SignOutService,
    private toastController: ToastController,
    private modalController: ModalController,
    private appVersion: AppVersion
  ) {}

  async ngOnInit() {
    this.isSendingEmail = false;
    this.userService.currentUser().subscribe((user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = undefined;
      }
    });
    //
    this.isMobile = this.platform.is('cordova');
    //
    try {
      const versionNumber = await this.appVersion.getVersionNumber();
      const versionCode = await this.appVersion.getVersionCode();
      this.versionString = `Version ${versionNumber} (${versionCode})`;
    } catch {
      this.versionString = '';
    }
  }

  ngOnDestroy() {
    this.userInfoSubscription?.unsubscribe();
    this.signOutSubscription?.unsubscribe();
  }

  async openChangePasswordModal() {
    const changePasswordModal = await this.modalController.create({
      component: ChangePasswordComponent,
      keyboardClose: true
    });
    await changePasswordModal.present();
  }

  async sendVerficationEmail() {
    if (!this.currentUser?.emailVerified) {
      this.isSendingEmail = true;
      try {
        await this.userService.sendEmailVerification();
        const sentEmail = await this.toastController.create({
          message: 'Sent verification email. Please check your mail box.',
          duration: 3000,
          position: 'bottom'
        });
        await sentEmail.present();
      } catch (err) {
        const errorNotification = await this.toastController.create({
          message: "Request hasn't been sent. Please try again.",
          duration: 3000,
          position: 'bottom',
          color: 'danger',
          buttons: [
            {
              icon: 'alert-circle',
              side: 'start'
            }
          ]
        });
        await errorNotification.present();
      } finally {
        this.isSendingEmail = false;
      }
    }
  }

  handleSignOut() {
    this.signOutSubscription = this.signOutService.signOut().subscribe({
      next: () => {},
      complete: () => {
        this.router.navigate(['/sign-in']);
      },
      error: async (err) => {
        const signOutFailed = await this.toastController.create({
          message: err?.message ?? 'An error occured while signing out. Please try again.',
          position: 'bottom',
          duration: 3000,
          color: 'danger'
        });
        await signOutFailed.present();
      }
    });
  }
}
