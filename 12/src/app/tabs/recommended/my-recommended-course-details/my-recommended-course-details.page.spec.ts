import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRecommendedCourseDetailsPage } from './my-recommended-course-details.page';

describe('MyRecommendedCourseDetailsPage', () => {
  let component: MyRecommendedCourseDetailsPage;
  let fixture: ComponentFixture<MyRecommendedCourseDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyRecommendedCourseDetailsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRecommendedCourseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
