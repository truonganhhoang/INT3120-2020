import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesPageRoutingModule } from './courses-routing.module';
import { CoursesPage } from './courses.page';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CoursesPageRoutingModule],
  declarations: [CoursesPage, CourseItemComponent]
})
export class CoursesPageModule {}
