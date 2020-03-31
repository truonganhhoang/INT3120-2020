import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCoursesPage } from './my-courses.page';

describe('MyCoursesPage', () => {
  let component: MyCoursesPage;
  let fixture: ComponentFixture<MyCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
