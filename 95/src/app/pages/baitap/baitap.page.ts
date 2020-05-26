import { Component, OnInit } from '@angular/core';
import getBaiTap from 'src/app/data/baitap';
import { BaitapDetailComponent } from 'src/app/components/baitap-detail/baitap-detail.component';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.page.html',
  styleUrls: ['./baitap.page.scss'],
})
export class BaitapPage implements OnInit {
  questions = [];
  lichsulambai = [];
  constructor(
    private modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.questions = getBaiTap();
    this.storage.get('lichsulambai').then((val) => {
      if (val !== null) {
        this.lichsulambai = val;
        console.log(this.lichsulambai);
        if (this.lichsulambai.length > 0) {
          for (const baidalam of this.lichsulambai) {
            const ind = this.questions.findIndex(x => x.num === baidalam.num);
            if (ind > -1) {
              this.questions[ind].ketqua = baidalam.ketqua;
            }
          }
        }
      }
    });
    console.log(this.questions);
  }

  async openQuestions(num: any) {
    const modal = await this.modalController.create({
      component: BaitapDetailComponent,
      componentProps: {
        num,
        lichsulambai: this.lichsulambai
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.getData();
  }

}
