import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss']
})
export class CourseDetailPage implements OnInit {
  private courseUrl = '';
  navLinks = [];
  selectedTab = 'overview';

  constructor(private router: Router) {
    this.courseUrl = this.router.url.split('/').reverse().slice(1).reverse().join('/');
    this.navLinks = [
      { path: `${this.courseUrl}/overview`, label: 'Overview' },
      { path: `${this.courseUrl}/grades`, label: 'Grades' },
      { path: `${this.courseUrl}/forums`, label: 'Forums' },
      { path: `${this.courseUrl}/info`, label: 'Info' }
    ];
  }

  ngOnInit() {}
}
