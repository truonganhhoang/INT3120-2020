import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-assignment-content',
  templateUrl: './assignment-content.component.html',
  styleUrls: ['./assignment-content.component.scss']
})
export class AssignmentContentComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
