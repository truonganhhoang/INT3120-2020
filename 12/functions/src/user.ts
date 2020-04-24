import { pickBy } from 'lodash';
import { app, admin, fn } from './setup';

const IGNORED_KEYS = ['passwordHash', 'passwordSalt', 'providerData', 'customClaims', 'metadata', 'uid'];
const filterUserKeys = (data: any) => {
  return pickBy(data, (value, key) => !(key in IGNORED_KEYS));
};

const auth = fn.auth;

const isFirebaseUser = (obj: any): obj is admin.auth.UserRecord => {
  return 'uid' in obj;
};

export const updateUserData = fn.https.onCall((data, context) => {
  if (isFirebaseUser(data) && context.auth?.uid === data.uid) {
    const userData = filterUserKeys(data.toJSON());
    app.firestore().collection('users').doc(data.uid).set(userData);
  }
});

export const handleCreateUser = auth.user().onCreate((user) => {
  const userData = filterUserKeys(user.toJSON());
  app.firestore().collection('users').doc(user.uid).set(userData);
});

export const handleDeleteUser = auth.user().onDelete((user) => {
  app.firestore().collection('users').doc(user.uid).delete();
});
