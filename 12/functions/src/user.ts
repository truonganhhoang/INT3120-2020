import { app, admin, fn, filterUserKeys } from './setup';

const auth = fn.auth;

const isFirebaseUser = (obj: object): obj is admin.auth.UserRecord => {
  return 'uid' in obj;
};

export const updateUserData = fn.https.onCall(async (data, context) => {
  if (isFirebaseUser(data) && context.auth?.uid && context.auth?.uid === data.uid) {
    await app.firestore().collection('users').doc(`${data.uid}/profile`).set(filterUserKeys(data));
  }
});

export const handleCreateUser = auth.user().onCreate(async (user) => {
  await app
    .firestore()
    .collection('users')
    .doc(`${user.uid}`)
    .set({
      profile: {
        displayName: user.displayName,
        email: user.email,
        disabled: user.disabled,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber
      }
    });
});

export const handleDeleteUser = auth.user().onDelete(async (user) => {
  await app.firestore().collection('users').doc(user.uid).delete();
});
