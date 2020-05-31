import { Injectable, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { environment } from '../../../environments/environment';

Sentry.init({
  dsn: 'https://2227874519a54f3eb5bc60a0604cd1bb@o367163.ingest.sentry.io/5196464',
  environment: environment.production ? 'production' : 'development',
  ignoreErrors: ['Network Error']
});

@Injectable()
export class SentryErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    Sentry.captureException(error.originalError || error);
  }
}
