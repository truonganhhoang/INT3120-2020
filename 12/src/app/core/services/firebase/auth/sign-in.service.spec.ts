import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Facebook } from '@ionic-native/facebook/ngx';

import { environment } from '../../../../../environments/environment';
import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule],
      providers: [Facebook]
    });
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should failed', async () => {
    const email = '17020191@vnu.edu.vn';
    const password = '12345678';
    try {
      await service.signInWithEmailAndPassword(email, password).toPromise();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  it('should success', async () => {
    const email = '17020191@vnu.edu.vn';
    const password = '17020191';
    const user = await service.signInWithEmailAndPassword(email, password).toPromise();
    expect(user).toBeTruthy();
  });
});
