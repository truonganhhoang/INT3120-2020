import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const app = admin.initializeApp();
const fn = functions.region('asia-east2').runWith({ memory: '128MB' });

const filterUserKeys = (user: any) => {
  delete user.customClaims;
  delete user.emailVerified;
  delete user.metadata;
  delete user.multiFactor;
  delete user.passwordHash;
  delete user.passwordSalt;
  delete user.providerData;
  delete user.tenantId;
  delete user.toJSON;
  delete user.tokensValidAfterTime;
  delete user.uid;
  return user;
};

export { app, admin, fn, filterUserKeys };
