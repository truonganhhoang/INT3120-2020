import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ExploreTopicsComponent } from './explore-topics.component';

describe('ExploreTopicsComponent', () => {
  let component: ExploreTopicsComponent;
  let fixture: ComponentFixture<ExploreTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreTopicsComponent],
      imports: [IonicModule],
      providers: [UrlSerializer]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
