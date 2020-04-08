import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./my-courses/my-courses.module').then((m) => m.MyCoursesPageModule)
  },
  {
    path: 'course/:courseId',
    loadChildren: () => import('./my-course-details/my-course-details.module').then((m) => m.MyCourseDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'courses'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule {}
