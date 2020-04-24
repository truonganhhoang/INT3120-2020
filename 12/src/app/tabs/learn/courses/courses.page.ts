import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

import { UserService } from '../../../core/services/firebase/auth/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss']
})
export class CoursesPage implements AfterViewInit {
  navigationEnd$: Observable<RouterEvent>;
  updateUserDate$: Observable<any>;
  constructor(private router: Router, private userService: UserService) {
    this.navigationEnd$ = this.router.events.pipe(filter((event: RouterEvent) => event instanceof NavigationEnd));
    this.updateUserDate$ = this.userService.updateUserData();
  }

  async ngAfterViewInit() {
    this.navigationEnd$.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state.fromSignUp) {
        this.updateUserDate$.subscribe();
      }
    });
  }

  goToCourse(courseId: number) {
    this.router.navigate([`/tabs/learn/course/${courseId}`]);
  }
}
