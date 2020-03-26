import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./my-courses/my-courses.module').then((m) => m.MyCoursesPageModule)
  },
  {
    path: 'my-course-details',
    loadChildren: () => import('./my-course-details/my-course-details.module').then((m) => m.MyCourseDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPageRoutingModule {}
