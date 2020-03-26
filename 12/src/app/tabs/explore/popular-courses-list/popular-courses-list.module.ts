import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularCoursesListPageRoutingModule } from './popular-courses-list-routing.module';

import { PopularCoursesListPage } from './popular-courses-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PopularCoursesListPageRoutingModule],
  declarations: [PopularCoursesListPage]
})
export class PopularCoursesListPageModule {}
