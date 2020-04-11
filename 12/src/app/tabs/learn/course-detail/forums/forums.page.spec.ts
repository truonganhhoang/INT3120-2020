import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumsPage } from './forums.page';

describe('ForumsPage', () => {
  let component: ForumsPage;
  let fixture: ComponentFixture<ForumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForumsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
