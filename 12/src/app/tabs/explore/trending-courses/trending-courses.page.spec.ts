import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrendingCoursesPage } from './trending-courses.page';

describe('TrendingCoursesPage', () => {
  let component: TrendingCoursesPage;
  let fixture: ComponentFixture<TrendingCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
