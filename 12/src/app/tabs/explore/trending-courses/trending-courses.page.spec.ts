import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { TrendingCoursesPage } from './trending-courses.page';
import { routes } from './trending-courses-routing.module';

describe('TrendingCoursesPage', () => {
  let component: TrendingCoursesPage;
  let fixture: ComponentFixture<TrendingCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingCoursesPage],
      imports: [IonicModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
