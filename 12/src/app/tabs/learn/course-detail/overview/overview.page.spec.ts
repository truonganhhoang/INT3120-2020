import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CourseOverviewPage } from './overview.page';
import { routes } from './overview-routing.module';

describe('OverviewPage', () => {
  let component: CourseOverviewPage;
  let fixture: ComponentFixture<CourseOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOverviewPage],
      imports: [IonicModule, RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
