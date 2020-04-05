import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./downloaded-courses/downloaded-courses.module').then((m) => m.DownloadedCoursesListPageModule)
  },
  {
    path: 'course/:courseId',
    loadChildren: () =>
      import('./downloaded-course-details/downloaded-course-details.module').then(
        (m) => m.DownloadedCourseDetailsPageModule
      )
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
export class DownloadsRoutingModule {}
