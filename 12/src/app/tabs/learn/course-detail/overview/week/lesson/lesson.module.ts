import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonPageRoutingModule } from './lesson-routing.module';

import { LessonPage } from './lesson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonPageRoutingModule
  ],
  declarations: [LessonPage]
})
export class LessonPageModule {}
