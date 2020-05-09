import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../../../environments/environment';
import { IonicModule } from '@ionic/angular';

import { SignUpFailedComponent } from './sign-up-failed.component';

describe('SignUpFailedComponent', () => {
  let component: SignUpFailedComponent;
  let fixture: ComponentFixture<SignUpFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpFailedComponent, MatDialogClose],
      imports: [
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        MatDialogModule
      ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
