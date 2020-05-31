import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {

  }

  openRouter(type: string) {
    this.router.navigate([(type === 'lythuyet') ? '/lythuyet' : '/baitap']);
  }
}
