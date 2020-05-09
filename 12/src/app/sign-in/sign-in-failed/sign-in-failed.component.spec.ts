import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';

import { SignInFailedComponent } from './sign-in-failed.component';

describe('SignInFailedComponent', () => {
  let component: SignInFailedComponent;
  let fixture: ComponentFixture<SignInFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInFailedComponent],
      imports: [IonicModule, MatDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
