import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss']
})
export class CoursesPage {
  constructor(private router: Router) {}

  goToCourse(courseId: number) {
    this.router.navigate([`/tabs/learn/course/${courseId}`]);
  }
}
