import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonPage } from './lesson.page';

describe('LessonPage', () => {
  let component: LessonPage;
  let fixture: ComponentFixture<LessonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LessonPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
