import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook/ngx';
import { IonicModule } from '@ionic/angular';

import { environment } from '../../../../../../environments/environment';
import { SetPasswordForFacebookProviderComponent } from './facebook-provider.component';

describe('SetPasswordForFacebookProviderComponent', () => {
  let component: SetPasswordForFacebookProviderComponent;
  let fixture: ComponentFixture<SetPasswordForFacebookProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetPasswordForFacebookProviderComponent],
      imports: [
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFireStorageModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [FormBuilder, Facebook],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SetPasswordForFacebookProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
