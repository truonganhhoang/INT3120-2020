import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage,
    children: [
      {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesPageModule)
      },
      {
        path: 'course/:id',
        loadChildren: () => import('./course-detail/course-detail.module').then((m) => m.CourseDetailPageModule)
      },
      {
        path: '',
        redirectTo: 'courses'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPageRoutingModule {}
