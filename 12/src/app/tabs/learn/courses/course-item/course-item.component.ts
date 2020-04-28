import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleClickCourseMenuTrigger(event: Event) {
    event.stopPropagation();
  }
}
