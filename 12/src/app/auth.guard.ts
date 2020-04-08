import { Injectable } from '@angular/core';
import { Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private storage: Storage, private router: Router) {}

  async canLoad(_route: Route, segments: UrlSegment[]): Promise<boolean> {
    try {
      const user = await this.storage.get('user');
      if (user === null || typeof user !== 'object') {
        if (segments[0].path === 'tabs') {
          this.router.navigate(['sign-in']);
          return false;
        }
        return true;
      } else {
        if (segments[0].path !== 'tabs') {
          this.router.navigate(['tabs']);
          return false;
        }
        return true;
      }
    } catch {
      this.router.navigate(['sign-in']);
      return false;
    }
  }
}
