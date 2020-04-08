import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendingCoursesPageRoutingModule } from './trending-courses-routing.module';

import { TrendingCoursesPage } from './trending-courses.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TrendingCoursesPageRoutingModule],
  declarations: [TrendingCoursesPage]
})
export class TrendingCoursesPageModule {}
