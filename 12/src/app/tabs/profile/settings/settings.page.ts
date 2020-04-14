import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { SignOutService } from '../../../core/services/firebase/auth/sign-out.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit, OnDestroy {
  signOutSubscription?: Subscription;
  versionString: string;

  constructor(
    private router: Router,
    private appVersion: AppVersion,
    private signOutService: SignOutService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    try {
      const versionNumber = await this.appVersion.getVersionNumber();
      const versionCode = await this.appVersion.getVersionCode();
      this.versionString = `Version ${versionNumber} (${versionCode})`;
    } catch {
      this.versionString = '';
    }
  }

  ngOnDestroy() {
    this.signOutSubscription?.unsubscribe();
  }

  handleSignOut() {
    this.signOutSubscription = this.signOutService.signOut().subscribe({
      next: () => {},
      complete: async () => {
        await this.router.navigate(['/sign-in']);
      },
      error: async (err) => {
        const signOutFailed = await this.toastController.create({
          message: err?.message,
          position: 'bottom',
          duration: 3000
        });
        signOutFailed.present();
      }
    });
  }
}
