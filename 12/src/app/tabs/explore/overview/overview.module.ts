import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';
import { ExploreTopicsComponent } from './explore-topics/explore-topics.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OverviewPageRoutingModule],
  declarations: [OverviewPage, ExploreTopicsComponent, CourseItemComponent]
})
export class OverviewPageModule {}
