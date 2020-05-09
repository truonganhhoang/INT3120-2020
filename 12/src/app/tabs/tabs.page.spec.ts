import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonTabs } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { routes } from './tabs-routing.module';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  const childComponent = jasmine.createSpyObj('IonTabs', ['getSelected']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage, IonTabs],
      imports: [RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.tabs = childComponent;
    expect(component).toBeTruthy();
  });
});
