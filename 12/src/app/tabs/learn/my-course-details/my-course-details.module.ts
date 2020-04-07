import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { IonicModule } from '@ionic/angular';

import { MyCourseDetailsPageRoutingModule } from './my-course-details-routing.module';

import { MyCourseDetailsPage } from './my-course-details.page';
import { OverviewPage } from './overview/overview.page';
import { GradesPage } from './grades/grades.page';
import { ForumsPage } from './forums/forums.page';
import { InfoPage } from './info/info.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatTabsModule, MyCourseDetailsPageRoutingModule],
  declarations: [MyCourseDetailsPage, OverviewPage, GradesPage, ForumsPage, InfoPage]
})
export class MyCourseDetailsPageModule {}
