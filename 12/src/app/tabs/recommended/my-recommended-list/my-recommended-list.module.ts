import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRecommendedListPageRoutingModule } from './my-recommended-list-routing.module';

import { MyRecommendedListPage } from './my-recommended-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyRecommendedListPageRoutingModule],
  declarations: [MyRecommendedListPage]
})
export class MyRecommendedListPageModule {}
