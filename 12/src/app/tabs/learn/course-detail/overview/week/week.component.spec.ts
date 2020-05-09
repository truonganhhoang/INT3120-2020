import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseOverviewWeekComponent } from './week.component';

describe('CourseOverviewWeekComponent', () => {
  let component: CourseOverviewWeekComponent;
  let fixture: ComponentFixture<CourseOverviewWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOverviewWeekComponent],
      imports: [IonicModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseOverviewWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
