import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendedPage } from './recommended.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedPage
  },
  {
    path: 'my-recommended-list',
    loadChildren: () =>
      import('./my-recommended-list/my-recommended-list.module').then((m) => m.MyRecommendedListPageModule)
  },
  {
    path: 'my-recommended-course-details',
    loadChildren: () =>
      import('./my-recommended-course-details/my-recommended-course-details.module').then(
        (m) => m.MyRecommendedCourseDetailsPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendedPageRoutingModule {}
