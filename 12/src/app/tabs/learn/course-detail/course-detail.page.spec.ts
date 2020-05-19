import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CourseDetailPage } from './course-detail.page';
import { routes } from './course-detail-routing.module';
import { MatTabLink, MatTabsModule } from '@angular/material/tabs';

describe('CourseDetailPage', () => {
  let component: CourseDetailPage;
  let fixture: ComponentFixture<CourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailPage, MatTabLink],
      imports: [IonicModule, RouterTestingModule.withRoutes(routes), MatTabsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
