import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrendingCoursesListPage } from './trending-courses-list.page';

describe('TrendingCoursesListPage', () => {
  let component: TrendingCoursesListPage;
  let fixture: ComponentFixture<TrendingCoursesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingCoursesListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingCoursesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
