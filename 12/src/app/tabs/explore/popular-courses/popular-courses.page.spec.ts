import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { PopularCoursesPage } from './popular-courses.page';
import { routes } from './popular-courses-routing.module';

describe('PopularCoursesPage', () => {
  let component: PopularCoursesPage;
  let fixture: ComponentFixture<PopularCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCoursesPage],
      imports: [IonicModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
