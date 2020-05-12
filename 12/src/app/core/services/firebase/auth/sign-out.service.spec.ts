import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../../../../../environments/environment';
import { SignOutService } from './sign-out.service';

describe('SignOutService', () => {
  let service: SignOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule]
    });
    service = TestBed.inject(SignOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should success', async () => {
    expect(await service.signOut().toPromise()).toBeUndefined();
  });
});
