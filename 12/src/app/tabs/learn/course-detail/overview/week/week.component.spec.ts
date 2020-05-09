import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseOverviewWeekComponent } from './week.component';

describe('CourseOverviewWeekComponent', () => {
  let component: CourseOverviewWeekComponent;
  let fixture: ComponentFixture<CourseOverviewWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOverviewWeekComponent],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseOverviewWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
