import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicPage } from './topic.page';

describe('TopicPage', () => {
  let component: TopicPage;
  let fixture: ComponentFixture<TopicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopicPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
