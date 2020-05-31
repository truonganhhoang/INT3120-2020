import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import getBaiTap from 'src/app/data/baitap';
import { $ } from 'protractor';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-baitap-detail',
  templateUrl: './baitap-detail.component.html',
  styleUrls: ['./baitap-detail.component.scss'],
})
export class BaitapDetailComponent {
  @Input() num: number;
  @Input() lichsulambai: any[];
  baitap: any;
  cauhoi: {
    question: string;
    img: string;
    answers: {
      answer: string;
      correct?: boolean;
      isChecked?: boolean;
    }[]
  };
  caudung = 0;
  i = 0;
  ketqua: string | number;
  chualam = true;
  time = 180;
  constructor(
    private modalController: ModalController,
    private storage: Storage,
    private loadingController: LoadingController
  ) {
  }

  async ionViewDidEnter() {

    const loading = await this.loadingController.create({
      message: 'Đang nạp dữ liệu...',
      duration: 2000
    });
    await loading.present();
    setTimeout(() => {
      const data = getBaiTap();
      this.baitap = data.find(x => x.num === this.num);
      this.i = 0;
      this.next();
      const timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          clearInterval(timer);
          this.checkmark();
          this.submit();
        }
      }, 1000);
    }, 1000);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  next() {
    // kiểm tra câu đúng
    if (this.i > 0) {
      this.checkmark();
      this.chualam = true;
    }

    // chuyển câu hỏi
    this.cauhoi = this.baitap.questions[this.i];
    this.i++;
    if (this.cauhoi === undefined) {
      this.submit();
    }
  }

  checkmark() {
    const indexChecked = this.cauhoi.answers.findIndex(x => x.isChecked);
    const indexCorrect = this.cauhoi.answers.findIndex(x => x.correct);
    if (indexChecked === indexCorrect) {
      this.caudung++;
    }
  }

  // hàm chạy khi chọn/bỏ câu trả lời
  selectCauTraLoi(item, i) {
    if (item.isChecked) {
      this.chualam = false;
      for (const index in this.cauhoi.answers) {
        if (index !== i.toString()) {
          this.cauhoi.answers[index].isChecked = false;
        }
      }
    } else {
      this.chualam = true;
    }
  }

  // hàm chấm điểm
  submit() {
    const quantityQuestions = this.baitap.questions.length;

    this.ketqua = +this.caudung;

    const ind = this.lichsulambai.findIndex(x => x.num === this.num);
    const obj = {
      num: this.num,
      ketqua: this.ketqua.toString()
    };
    if (ind === -1) {
      this.lichsulambai.push(obj);
    } else if (ind > -1) {
      this.lichsulambai[ind] = obj;
    }
    this.storage.set('lichsulambai', this.lichsulambai);
  }

}
