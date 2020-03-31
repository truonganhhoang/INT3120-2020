import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopRatedCoursesListPage } from './top-rated-courses-list.page';

describe('TopRatedCoursesListPage', () => {
  let component: TopRatedCoursesListPage;
  let fixture: ComponentFixture<TopRatedCoursesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedCoursesListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopRatedCoursesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
