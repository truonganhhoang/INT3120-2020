import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopRatedCoursesPageRoutingModule } from './top-rated-courses-routing.module';

import { TopRatedCoursesPage } from './top-rated-courses.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TopRatedCoursesPageRoutingModule],
  declarations: [TopRatedCoursesPage]
})
export class TopRatedCoursesPageModule {}
