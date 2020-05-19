import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadedCourseDetailPage } from './downloaded-course-detail.page';

describe('DownloadedCourseDetailsPage', () => {
  let component: DownloadedCourseDetailPage;
  let fixture: ComponentFixture<DownloadedCourseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadedCourseDetailPage],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadedCourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
