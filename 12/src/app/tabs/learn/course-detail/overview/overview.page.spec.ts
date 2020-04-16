import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseOverviewPage } from './overview.page';

describe('OverviewPage', () => {
  let component: CourseOverviewPage;
  let fixture: ComponentFixture<CourseOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOverviewPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
