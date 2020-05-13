import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { IonicModule } from '@ionic/angular';

import { environment } from '../../../../environments/environment';
import { SettingsPage } from './settings.page';
import { routes } from './settings-routing.module';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsPage],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes(routes),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFireStorageModule
      ],
      providers: [Facebook, AppVersion]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
