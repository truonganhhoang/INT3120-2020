import { Injectable } from '@angular/core';
import { Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private storage: Storage, private router: Router) {}

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    try {
      const user = await this.storage.get('user');
      if (user === null || typeof user !== 'object') {
        this.router.navigateByUrl('/sign-in');
        return false;
      }
      return true;
    } catch {
      this.router.navigateByUrl('/sign-in');
      return false;
    }
  }
}
