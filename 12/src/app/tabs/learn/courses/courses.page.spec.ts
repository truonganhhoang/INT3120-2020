import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CoursesPage } from './courses.page';
import { routes } from './courses-routing.module';

describe('CoursesPage', () => {
  let component: CoursesPage;
  let fixture: ComponentFixture<CoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesPage],
      imports: [IonicModule, RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
