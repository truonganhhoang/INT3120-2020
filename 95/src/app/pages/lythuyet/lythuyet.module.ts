import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LythuyetPageRoutingModule } from './lythuyet-routing.module';

import { LythuyetPage } from './lythuyet.page';
import { LythuyetDetailComponent } from 'src/app/components/lythuyet-detail/lythuyet-detail.component';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LythuyetPageRoutingModule
  ],
  entryComponents: [
    LythuyetDetailComponent
  ],
  providers: [PhotoViewer],
  declarations: [LythuyetPage, LythuyetDetailComponent]
})
export class LythuyetPageModule {}
