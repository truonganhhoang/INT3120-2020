import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'learn',
        loadChildren: () => import('./learn/my-courses/my-courses.module').then((m) => m.MyCoursesPageModule),
        children: [
          {
            path: 'courses',
            loadChildren: () => import('./learn/my-courses/my-courses.module').then((m) => m.MyCoursesPageModule)
          },
          {
            path: 'course/:courseId',
            loadChildren: () =>
              import('./learn/my-course-details/my-course-details.module').then((m) => m.MyCourseDetailsPageModule)
          },
          {
            path: '',
            redirectTo: 'courses',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'recommended',
        loadChildren: () =>
          import('./recommended/my-recommended-list/my-recommended-list.module').then(
            (m) => m.MyRecommendedListPageModule
          ),
        children: [
          {
            path: 'courses',
            loadChildren: () =>
              import('./recommended/my-recommended-list/my-recommended-list.module').then(
                (m) => m.MyRecommendedListPageModule
              )
          },
          {
            path: 'course/:courseId',
            loadChildren: () =>
              import('./recommended/my-recommended-course-details/my-recommended-course-details.module').then(
                (m) => m.MyRecommendedCourseDetailsPageModule
              )
          },
          {
            path: '',
            redirectTo: 'courses',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'downloads',
        loadChildren: () =>
          import('./downloads/downloaded-courses-list/downloaded-courses-list.module').then(
            (m) => m.DownloadedCoursesListPageModule
          ),
        children: [
          {
            path: 'courses',
            loadChildren: () =>
              import('./downloads/downloaded-courses-list/downloaded-courses-list.module').then(
                (m) => m.DownloadedCoursesListPageModule
              )
          },
          {
            path: 'course/:courseId',
            loadChildren: () =>
              import('./downloads/downloaded-course-details/downloaded-course-details.module').then(
                (m) => m.DownloadedCourseDetailsPageModule
              )
          },
          {
            path: '',
            redirectTo: 'courses',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'explore',
        loadChildren: () => import('./explore/overview/overview.module').then((m) => m.OverviewPageModule),
        children: [
          {
            path: 'overview',
            loadChildren: () => import('./explore/overview/overview.module').then((m) => m.OverviewPageModule)
          },
          {
            path: 'trending',
            loadChildren: () =>
              import('./explore/trending-courses-list/trending-courses-list.module').then(
                (m) => m.TrendingCoursesListPageModule
              )
          },
          {
            path: 'popular',
            loadChildren: () =>
              import('./explore/popular-courses-list/popular-courses-list.module').then(
                (m) => m.PopularCoursesListPageModule
              )
          },
          {
            path: 'top-rated',
            loadChildren: () =>
              import('./explore/top-rated-courses-list/top-rated-courses-list.module').then(
                (m) => m.TopRatedCoursesListPageModule
              )
          },
          {
            path: 'search',
            loadChildren: () => import('./explore/search/search.module').then((m) => m.SearchPageModule)
          },
          {
            path: 'course/:courseId',
            loadChildren: () =>
              import('./explore/explore-course-details/explore-course-details.module').then(
                (m) => m.ExploreCourseDetailsPageModule
              )
          },
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/my-profile/my-profile.module').then((m) => m.MyProfilePageModule),
        children: [
          {
            path: 'settings',
            loadChildren: () => import('./profile/settings/settings.module').then((m) => m.SettingsPageModule)
          },
          {
            path: '',
            loadChildren: () => import('./profile/my-profile/my-profile.module').then((m) => m.MyProfilePageModule),
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/learn/courses'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/learn/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
