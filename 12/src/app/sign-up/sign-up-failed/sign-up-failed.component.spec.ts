import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpFailedComponent } from './sign-up-failed.component';

describe('SignUpFailedComponent', () => {
  let component: SignUpFailedComponent;
  let fixture: ComponentFixture<SignUpFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpFailedComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
