import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss']
})
export class CourseDetailPage implements OnInit {
  navLinks: { path: string; label: string }[];
  selectedTab = 'overview';
  courseId?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.courseId = Number(paramMap.get('id')) || undefined;
      this.navLinks = [
        { path: `/tabs/learn/course/${this.courseId}/overview`, label: 'Overview' },
        { path: `/tabs/learn/course/${this.courseId}/grades`, label: 'Grades' },
        { path: `/tabs/learn/course/${this.courseId}/info`, label: 'Info' }
      ];
    });
  }
}
