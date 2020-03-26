import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopRatedCoursesListPageRoutingModule } from './top-rated-courses-list-routing.module';

import { TopRatedCoursesListPage } from './top-rated-courses-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TopRatedCoursesListPageRoutingModule],
  declarations: [TopRatedCoursesListPage]
})
export class TopRatedCoursesListPageModule {}
