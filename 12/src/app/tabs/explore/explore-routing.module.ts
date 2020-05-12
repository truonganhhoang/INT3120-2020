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
    loadChildren: () => import('./popular-courses/popular-courses.module').then((m) => m.PopularCoursesPageModule)
  },
  {
    path: 'top-rated',
    loadChildren: () => import('./top-rated-courses/top-rated-courses.module').then((m) => m.TopRatedCoursesPageModule)
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
