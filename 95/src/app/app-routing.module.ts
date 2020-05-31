import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'lythuyet',
    loadChildren: () => import('./pages/lythuyet/lythuyet.module').then( m => m.LythuyetPageModule)
  },
  {
    path: 'baitap',
    loadChildren: () => import('./pages/baitap/baitap.module').then( m => m.BaitapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
