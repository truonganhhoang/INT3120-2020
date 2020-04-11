import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonPage } from './lesson.page';

const routes: Routes = [
  {
    path: '',
    component: LessonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonPageRoutingModule {}
