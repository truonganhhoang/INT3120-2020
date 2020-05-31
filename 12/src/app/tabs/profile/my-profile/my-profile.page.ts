import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../../core/services/firebase/auth/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss']
})
export class MyProfilePage implements OnInit, OnDestroy {
  user?: firebase.User;
  userInfoSubscription?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userInfoSubscription = this.userService.currentUser().subscribe({
      next: (user) => {
        this.user = user;
      },
      complete: () => {},
      error: () => {}
    });
  }

  ngOnDestroy() {
    this.userInfoSubscription?.unsubscribe();
  }
}
