import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss']
})
export class OverviewPage implements OnInit {
  courseUrl = '';

  constructor(private router: Router) {
    this.courseUrl = this.router.url.split('/').reverse().slice(1).reverse().join('/');
  }

  ngOnInit() {}
}
