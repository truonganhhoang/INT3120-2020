import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-downloaded-courses',
  templateUrl: './downloaded-courses.page.html',
  styleUrls: ['./downloaded-courses.page.scss']
})
export class DownloadedCoursesPage implements OnInit {
  isMobile: boolean;

  constructor(private platform: Platform) {
    this.isMobile = this.platform.is('cordova');
  }

  ngOnInit() {}
}
