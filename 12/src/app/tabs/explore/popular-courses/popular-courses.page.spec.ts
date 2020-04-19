import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopularCoursesPage } from './popular-courses.page';

describe('PopularCoursesPage', () => {
  let component: PopularCoursesPage;
  let fixture: ComponentFixture<PopularCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
