import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss']
})
export class CourseOverviewPage implements OnInit {
  courseUrl?: string;
  courseId?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.courseId = Number(paramMap.get('id')) || undefined;
      this.courseUrl = `/tabs/learn/course/${this.courseId}/`;
    });
  }
}
