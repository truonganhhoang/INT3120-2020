import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadedCoursesPage } from './downloaded-courses.page';

describe('DownloadedCoursesPage', () => {
  let component: DownloadedCoursesPage;
  let fixture: ComponentFixture<DownloadedCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadedCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadedCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
