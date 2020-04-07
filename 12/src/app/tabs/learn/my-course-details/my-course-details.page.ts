import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-course-details',
  templateUrl: './my-course-details.page.html',
  styleUrls: ['./my-course-details.page.scss']
})
export class MyCourseDetailsPage implements OnInit {
  readonly courseTabs = ['overview', 'grades', 'forum', 'info'];
  tabIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  onCourseTabChange(newTabIndex: number) {
    if (this.tabIndex !== newTabIndex) {
      this.tabIndex = newTabIndex;
      this.router.navigate([this.courseTabs[newTabIndex]]);
    }
  }
}
