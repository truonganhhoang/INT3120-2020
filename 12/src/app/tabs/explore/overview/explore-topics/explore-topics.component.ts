import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-explore-topics',
  templateUrl: './explore-topics.component.html',
  styleUrls: ['./explore-topics.component.scss']
})
export class ExploreTopicsComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
