import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';

import { SignInFailedComponent } from './sign-in-failed.component';

describe('SignInFailedComponent', () => {
  let component: SignInFailedComponent;
  let fixture: ComponentFixture<SignInFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInFailedComponent, MatDialogClose],
      imports: [IonicModule, MatDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
