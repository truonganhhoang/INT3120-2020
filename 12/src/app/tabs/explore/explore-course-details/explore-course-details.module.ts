import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreCourseDetailsPageRoutingModule } from './explore-course-details-routing.module';

import { ExploreCourseDetailsPage } from './explore-course-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ExploreCourseDetailsPageRoutingModule],
  declarations: [ExploreCourseDetailsPage]
})
export class ExploreCourseDetailsPageModule {}
