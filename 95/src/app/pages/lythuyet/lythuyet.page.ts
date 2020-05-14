import { Component, OnInit } from '@angular/core';
import getLyThuyet from 'src/app/data/lythuyet';
import { ModalController } from '@ionic/angular';
import { LythuyetDetailComponent } from 'src/app/components/lythuyet-detail/lythuyet-detail.component';

@Component({
  selector: 'app-lythuyet',
  templateUrl: './lythuyet.page.html',
  styleUrls: ['./lythuyet.page.scss'],
})
export class LythuyetPage implements OnInit {

  data: any[];

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.data = getLyThuyet();
    console.log(this.data);
  }

  async openDetail(item: any) {
    const modal = await this.modalController.create({
      component: LythuyetDetailComponent,
      componentProps: {
        chuong: item
      }
    });
    return await modal.present();
  }
}
