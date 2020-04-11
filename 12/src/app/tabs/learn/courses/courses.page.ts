import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  id: number;
  name: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss']
})
export class CoursesPage implements OnInit {
  courses: Course[];

  constructor(private router: Router) {
    this.courses = [
      { id: 1, name: 'Ionic' },
      { id: 2, name: 'React Native' },
      { id: 3, name: 'Flutter' }
    ];
  }

  ngOnInit() {}

  goToCourse(courseId: number) {
    this.router.navigate([`../course/${courseId}`]);
  }
}
