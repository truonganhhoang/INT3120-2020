import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';

import { SignOutService } from '../../../core/services/firebase/auth/sign-out.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit, OnDestroy {
  signOutSubscription?: Subscription;

  constructor(private router: Router, private storageService: Storage, private signOutService: SignOutService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.signOutSubscription?.unsubscribe();
  }

  handleSignOut() {
    this.signOutSubscription = this.signOutService.signOut().subscribe({
      next: () => {},
      complete: () => {
        this.storageService.clear();
        this.router.navigateByUrl('/sign-in');
      },
      error: console.error
    });
  }
}
