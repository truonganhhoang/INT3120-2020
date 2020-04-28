import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AssignmentContentComponent } from '../assignment-content/assignment-content.component';

@Component({
  selector: 'app-course-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.scss']
})
export class AssignmentItemComponent implements OnInit {
  @Input()
  assignmentNumber: number;
  @Input()
  assignmentSubmitted: boolean;
  @Input()
  assignmentTitle: string;
  @Input()
  assignmentDeadline: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openAssignment() {
    const assignment = await this.modalController.create({
      component: AssignmentContentComponent,
      componentProps: {
        assignmentNumber: this.assignmentNumber
      }
    });
    await assignment.present();
  }
}
