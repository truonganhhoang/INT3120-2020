import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file';
@Component({
  selector: 'app-lythuyet-detail',
  templateUrl: './lythuyet-detail.component.html',
  styleUrls: ['./lythuyet-detail.component.scss'],
})
export class LythuyetDetailComponent implements OnInit {
  @Input() chuong: any;
  slideOpts = {
    speed: 100,
  };
  constructor(
    private modalCtl: ModalController,
    private photoViewer: PhotoViewer,
    public loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Đang nạp dữ liệu...',
      duration: 1000
    });
    await loading.present();

  }

  dismiss() {
    this.modalCtl.dismiss();
  }

  view(img: string) {
    console.log(img);
    this.photoViewer.show(img);
  }
}
