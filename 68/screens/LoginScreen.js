import React from 'react';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';

import Login from '../components/Login';

export default class LoginScreen extends React.Component {
    static navigationOptions = () => ({
      title: 'Login',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#006265',
      },
    });

    signInWithGoogleAsync = async () => {
      try {
        const result = await Google.logInAsync({
          androidClientId: '376767086525-ufioo6rnbc890repj2b87c8tt0nqgml3.apps.googleusercontent.com',
          iosClientId: '376767086525-kgcvdp051mf3qe35na2cbg5vsipmd6e7.apps.googleusercontent.com',
          scopes: ['profile'],
        });
        if (result.type === 'success') {
          console.log(result);
          return result.accessToken;
        }
        return { cancelled: true };
      } catch (e) {
        return { error: true };
      }
    }

    logInFacebook = async () => {
      try {
        await Facebook.initializeAsync('2936194473145634');
        const {
          type,
          token
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          firebase.auth().signInWithCredential(credential)
            .then((data) => { console.log(data); this.props.navigation.navigate('Levels'); })
            .catch((err) => console.log(err));
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        console.log(`Facebook Login Error: ${message}`);
      }
    }

    render() {
      return (
        <Login onPress={() => this.logInFacebook()} />
      );
    }
}
