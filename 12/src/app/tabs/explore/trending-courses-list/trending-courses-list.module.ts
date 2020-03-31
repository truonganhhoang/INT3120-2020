import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendingCoursesListPageRoutingModule } from './trending-courses-list-routing.module';

import { TrendingCoursesListPage } from './trending-courses-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TrendingCoursesListPageRoutingModule],
  declarations: [TrendingCoursesListPage]
})
export class TrendingCoursesListPageModule {}
