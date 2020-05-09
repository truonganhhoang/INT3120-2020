import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Facebook } from '@ionic-native/facebook/ngx';
import { IonicModule } from '@ionic/angular';

import { environment } from '../../../environments/environment';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MatDialogModule, MatDialogRef, MatDialogClose } from '@angular/material/dialog';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent, MatDialogClose],
      imports: [
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [Facebook, MatDialogRef],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
