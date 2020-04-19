import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CourseLessonContentComponent } from '../lesson-content/lesson-content.component';

@Component({
  selector: 'app-course-overview-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class CourseOverviewLessonComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openLesson() {
    const lessonModal = await this.modalController.create({
      component: CourseLessonContentComponent,
      componentProps: {
        // pass data to modal
      },
      keyboardClose: true
    });
    await lessonModal.present();
  }

  downloadLesson() {}

  deleteLessonFromDevice() {}
}
