import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyPage } from './policy.page';

describe('PolicyPage', () => {
  let component: PolicyPage;
  let fixture: ComponentFixture<PolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
