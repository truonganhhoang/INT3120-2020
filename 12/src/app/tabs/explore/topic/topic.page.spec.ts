import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicPage } from './topic.page';
import { TopicPageRoutingModule } from './topic-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('TopicPage', () => {
  let component: TopicPage;
  let fixture: ComponentFixture<TopicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopicPage],
      imports: [CommonModule, FormsModule, IonicModule, TopicPageRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
