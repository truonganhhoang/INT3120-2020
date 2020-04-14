import { TestBed } from '@angular/core/testing';

import { SentryErrorHandlerService } from './sentry-error-handler.service';

describe('SentryErrorHandlerService', () => {
  let service: SentryErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentryErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
