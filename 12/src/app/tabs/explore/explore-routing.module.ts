import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorePage } from './explore.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then((m) => m.OverviewPageModule)
  },
  {
    path: 'trending-courses-list',
    loadChildren: () =>
      import('./trending-courses-list/trending-courses-list.module').then((m) => m.TrendingCoursesListPageModule)
  },
  {
    path: 'popular-courses-list',
    loadChildren: () =>
      import('./popular-courses-list/popular-courses-list.module').then((m) => m.PopularCoursesListPageModule)
  },
  {
    path: 'top-rated-courses-list',
    loadChildren: () =>
      import('./top-rated-courses-list/top-rated-courses-list.module').then((m) => m.TopRatedCoursesListPageModule)
  },
  {
    path: 'explore-course-details',
    loadChildren: () =>
      import('./explore-course-details/explore-course-details.module').then((m) => m.ExploreCourseDetailsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule {}
