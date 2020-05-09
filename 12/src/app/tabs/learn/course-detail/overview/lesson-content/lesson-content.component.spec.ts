import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CourseLessonContentComponent } from './lesson-content.component';

describe('CourseLessonContentComponent', () => {
  let component: CourseLessonContentComponent;
  let fixture: ComponentFixture<CourseLessonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseLessonContentComponent],
      imports: [IonicModule],
      providers: [UrlSerializer]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLessonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
