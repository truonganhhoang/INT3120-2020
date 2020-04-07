import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopularCoursesListPage } from './popular-courses-list.page';

describe('PopularCoursesListPage', () => {
  let component: PopularCoursesListPage;
  let fixture: ComponentFixture<PopularCoursesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCoursesListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularCoursesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
