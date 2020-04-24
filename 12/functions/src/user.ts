import { app, admin, fn, filterUserKeys, Sentry } from './setup';

const auth = fn.auth;

const isFirebaseUser = (obj: any): obj is admin.auth.UserRecord => {
  return 'uid' in obj;
};

export const updateUserData = fn.https.onCall((data, context) => {
  try {
    if (isFirebaseUser(data) && context.auth?.uid === data.uid) {
      const userData = filterUserKeys(data.toJSON());
      app.firestore().collection('users').doc(data.uid).set(userData);
    }
  } catch (err) {
    Sentry.captureException(err.originalError || err);
  }
});

export const handleCreateUser = auth.user().onCreate((user) => {
  try {
    const userData = filterUserKeys(user.toJSON());
    app.firestore().collection('users').doc(user.uid).set(userData);
  } catch (err) {
    Sentry.captureException(err.originalError || err);
  }
});

export const handleDeleteUser = auth.user().onDelete((user) => {
  try {
    app.firestore().collection('users').doc(user.uid).delete();
  } catch (err) {
    Sentry.captureException(err.originalError || err);
  }
});
