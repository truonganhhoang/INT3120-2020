import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInFailedComponent } from './sign-in-failed.component';

describe('SignInFailedComponent', () => {
  let component: SignInFailedComponent;
  let fixture: ComponentFixture<SignInFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInFailedComponent],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
