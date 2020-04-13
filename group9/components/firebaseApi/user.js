import firebase from './firebaseInit';

const getInfo = async () => {
  const uid = firebase.auth().currentUser.uid;
  const doc = await firebase.firestore().doc(`users/${uid}/listInfo/info`).get();
  try {
    return doc.data();
  } catch (err) {
    console.log(err);
  }
  return ret;
};

const addInfo = async (info) => {
  console.log(info);
  const uid = info.uid;
  const prepared_info = await {
    apiKey: info.apiKey,
    appName: info.appName,
    authDomain: info.authDomain,
    createdAt: info.createdAt,
    displayName: info.displayName,
    email: info.email,
    emailVerified: info.emailVerified,
    isAnonymous: info.isAnonymous,
    lastLoginAt: info.lastLoginAt,
    phoneNumber: info.phoneNumber,
    photoURL: info.photoURL,
  };
  const doc_ref = await firebase.firestore().doc(`users/${uid}/listInfo/info`);
  const doc = await doc_ref.get();
  if (doc.exists) {
    console.log('User existed');
    return false;
  } else {
    console.log(prepared_info);
    await doc_ref.set(prepared_info);
    return true;
  }
};

const updateInfo = async (newInfo) => {
  const uid = firebase.auth().currentUser.uid;
  const doc_ref = await firebase.firestore().doc(`users/${uid}/listInfo/info`);
  try {
    await doc_ref.update(newInfo);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { getInfo, addInfo, updateInfo };
