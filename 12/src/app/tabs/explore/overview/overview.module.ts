import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';
import { CourseItemComponent } from './course-item/course-item.component';
import { TopicService } from '../../../core/services/firebase/firestore/topic.service';
import { CourseService } from '../../../core/services/firebase/firestore/course.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OverviewPageRoutingModule],
  declarations: [OverviewPage, CourseItemComponent],
  providers: [TopicService, CourseService]
})
export class OverviewPageModule {}
