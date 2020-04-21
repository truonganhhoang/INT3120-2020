import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../../core/services/firebase/auth/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss']
})
export class MyProfilePage implements OnInit, OnDestroy {
  userInfoSubscription?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userInfoSubscription = this.userService.currentUser().subscribe({
      next: console.log,
      complete: () => {},
      error: console.error
    });
  }

  ngOnDestroy() {
    this.userInfoSubscription?.unsubscribe();
  }
}
