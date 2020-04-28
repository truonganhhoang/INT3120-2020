import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { CourseOverviewPage } from './overview.page';
import { CourseOverviewWeekComponent } from './week/week.component';
import { CourseOverviewLessonComponent } from './lesson/lesson.component';
import { CourseLessonContentComponent } from './lesson-content/lesson-content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatTabsModule, OverviewPageRoutingModule],
  declarations: [
    CourseOverviewPage,
    CourseOverviewWeekComponent,
    CourseOverviewLessonComponent,
    CourseLessonContentComponent
  ]
})
export class OverviewPageModule {}
