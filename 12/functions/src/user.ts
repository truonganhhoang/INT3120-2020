import { app, admin, fn, filterUserKeys } from './setup';

const auth = fn.auth;

const isFirebaseUser = (obj: any): obj is admin.auth.UserRecord => {
  return 'uid' in obj;
};

export const updateUserData = fn.https.onCall(async (data, context) => {
  if (isFirebaseUser(data) && context.auth?.uid && context.auth?.uid === data.uid) {
    await app.firestore().collection('users').doc(data.uid).set(filterUserKeys(data));
  }
});

export const handleCreateUser = auth.user().onCreate(async (user) => {
  await app.firestore().collection('users').doc(user.uid).set(filterUserKeys(user));
});

export const handleDeleteUser = auth.user().onDelete(async (user) => {
  await app.firestore().collection('users').doc(user.uid).delete();
});
