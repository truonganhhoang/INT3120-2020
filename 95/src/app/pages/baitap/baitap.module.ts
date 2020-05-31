import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaitapPageRoutingModule } from './baitap-routing.module';

import { BaitapPage } from './baitap.page';
import { BaitapDetailComponent } from 'src/app/components/baitap-detail/baitap-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaitapPageRoutingModule
  ],
  entryComponents: [BaitapDetailComponent],
  declarations: [BaitapPage, BaitapDetailComponent]
})
export class BaitapPageModule {}
