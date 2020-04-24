import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import _ from 'lodash';

const app = admin.initializeApp();
const fn = functions.region('asia-east2');

const IGNORED_KEYS = ['passwordHash', 'passwordSalt', 'providerData', 'customClaims', 'metadata', 'uid'];

const filterUserKeys = (data: any) => {
  return _.pickBy(data, (value, key) => !(key in IGNORED_KEYS));
};

export { app, admin, fn, filterUserKeys };
