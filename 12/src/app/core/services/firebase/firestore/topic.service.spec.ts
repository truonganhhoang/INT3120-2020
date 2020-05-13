import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../../../../../environments/environment';
import { TopicService } from './topic.service';

describe('TopicService', () => {
  let service: TopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), //
        AngularFirestoreModule
      ]
    });
    service = TestBed.inject(TopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
