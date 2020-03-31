import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadedCoursesListPage } from './downloaded-courses-list.page';

describe('DownloadedCoursesListPage', () => {
  let component: DownloadedCoursesListPage;
  let fixture: ComponentFixture<DownloadedCoursesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadedCoursesListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadedCoursesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
