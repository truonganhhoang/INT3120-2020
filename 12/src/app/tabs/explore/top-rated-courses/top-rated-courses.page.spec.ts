import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopRatedCoursesPage } from './top-rated-courses.page';

describe('TopRatedCoursesPage', () => {
  let component: TopRatedCoursesPage;
  let fixture: ComponentFixture<TopRatedCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopRatedCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
