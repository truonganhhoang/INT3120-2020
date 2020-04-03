import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then((m) => m.OverviewPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule)
  },
  {
    path: 'popular',
    loadChildren: () =>
      import('./popular-courses-list/popular-courses-list.module').then((m) => m.PopularCoursesListPageModule)
  },
  {
    path: 'top-rated',
    loadChildren: () =>
      import('./top-rated-courses-list/top-rated-courses-list.module').then((m) => m.TopRatedCoursesListPageModule)
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('./trending-courses-list/trending-courses-list.module').then((m) => m.TrendingCoursesListPageModule)
  },
  {
    path: 'course/:courseId',
    loadChildren: () =>
      import('./explore-course-details/explore-course-details.module').then((m) => m.ExploreCourseDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'overview'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule {}
