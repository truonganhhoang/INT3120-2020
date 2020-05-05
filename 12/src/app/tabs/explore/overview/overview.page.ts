import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ExploreTopicsComponent } from './explore-topics/explore-topics.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss']
})
export class OverviewPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async viewAllTopics() {
    const topics = await this.modalController.create({
      component: ExploreTopicsComponent
    });
    await topics.present();
  }
}
