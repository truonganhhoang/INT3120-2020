import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage implements AfterViewInit, OnDestroy {
  currentTab: string | null | undefined;

  @ViewChild(IonTabs)
  tabs: IonTabs;

  constructor() {}

  ngAfterViewInit() {
    this.currentTab = this.tabs.getSelected();
  }

  ngOnDestroy() {
    this.currentTab = null;
  }

  handleChangeTab(value: { tab: string }) {
    this.currentTab = value.tab;
  }
}
