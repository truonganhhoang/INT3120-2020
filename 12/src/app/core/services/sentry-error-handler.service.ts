import { Injectable, ErrorHandler, isDevMode } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://2227874519a54f3eb5bc60a0604cd1bb@o367163.ingest.sentry.io/5196464',
  environment: isDevMode() ? 'development' : 'production'
});

@Injectable()
export class SentryErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    Sentry.captureException(error.originalError || error);
  }
}
