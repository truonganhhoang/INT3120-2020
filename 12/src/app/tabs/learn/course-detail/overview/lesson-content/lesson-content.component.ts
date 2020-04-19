import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss']
})
export class CourseLessonContentComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeLesson(event: Event) {
    event.preventDefault();
    this.modalController.dismiss();
  }
}
