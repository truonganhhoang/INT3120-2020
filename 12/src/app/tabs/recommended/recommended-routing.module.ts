import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./my-recommended-list/my-recommended-list.module').then((m) => m.MyRecommendedListPageModule)
  },
  {
    path: 'course/:courseId',
    loadChildren: () =>
      import('./my-recommended-course-details/my-recommended-course-details.module').then(
        (m) => m.MyRecommendedCourseDetailsPageModule
      )
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendedRoutingModule {}
