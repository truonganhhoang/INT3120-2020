import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekPage } from './week.page';

const routes: Routes = [
  {
    path: '',
    component: WeekPage
  },
  {
    path: ':lessonId',
    loadChildren: () => import('./lesson/lesson.module').then((m) => m.LessonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekPageRoutingModule {}
