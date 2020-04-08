import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';

import { SignOutService } from '../../../core/services/firebase/auth/sign-out.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnDestroy {
  signOutSubscription?: Subscription;

  constructor(private router: Router, private storageService: Storage, private signOutService: SignOutService) {}

  ngOnDestroy() {
    console.log('Setting Page destroy');
    this.signOutSubscription?.unsubscribe();
  }

  handleSignOut() {
    this.signOutSubscription = this.signOutService.signOut().subscribe({
      next: () => {},
      complete: async () => {
        await this.storageService.clear();
        await this.router.navigate(['sign-in']);
      },
      error: console.error
    });
  }
}
