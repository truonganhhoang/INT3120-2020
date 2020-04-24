import * as Sentry from '@sentry/node';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import _ from 'lodash';

Sentry.init({
  dsn: 'https://2227874519a54f3eb5bc60a0604cd1bb@o367163.ingest.sentry.io/5196464'
});

const app = admin.initializeApp();
const fn = functions.region('asia-east2');

const IGNORED_KEYS = ['passwordHash', 'passwordSalt', 'providerData', 'customClaims', 'metadata', 'uid'];

const filterUserKeys = (data: any) => {
  return _.pickBy(data, (value, key) => !(key in IGNORED_KEYS));
};

export { app, admin, fn, filterUserKeys, Sentry };
