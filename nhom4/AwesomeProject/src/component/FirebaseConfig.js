import React from 'react';
import * as firebase from 'firebase';
import {InteractionManager} from 'react-native'
var firebaseConfig = {
  apiKey: "AIzaSyCbE6iSmze-es4s0y33-NFI91zAAChO3PI",
  authDomain: "cplx-da6dd.firebaseapp.com",
  databaseURL: "https://cplx-da6dd.firebaseio.com",
  projectId: "cplx-da6dd",
  storageBucket: "cplx-da6dd.appspot.com",
  messagingSenderId: "791365217675",
  appId: "1:791365217675:web:d86f321a30e5043bb4138e",
  measurementId: "G-7S4KWPD5QM"
};
const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}
export const FirebaseApp=firebase.initializeApp(firebaseConfig);
