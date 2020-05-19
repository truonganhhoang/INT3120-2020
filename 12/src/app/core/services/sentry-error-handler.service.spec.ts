import { SentryErrorHandlerService } from './sentry-error-handler.service';

describe('SentryErrorHandlerService', () => {
  let service: SentryErrorHandlerService;

  beforeEach(() => {
    service = new SentryErrorHandlerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
