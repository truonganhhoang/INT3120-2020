import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseOverviewLessonComponent } from './lesson.component';

describe('CourseOverviewLessonComponent', () => {
  let component: CourseOverviewLessonComponent;
  let fixture: ComponentFixture<CourseOverviewLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOverviewLessonComponent],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseOverviewLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
