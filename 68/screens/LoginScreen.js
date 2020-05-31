/* eslint-disable no-console */
import React from 'react';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';
import {
  ActivityIndicator,
  StyleSheet, View, Button, Dimensions
} from 'react-native';
import Login from '../components/Login';
import Levels from './Levels';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => (deviceWidth * percent) / 100;

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
  constructor(props){
    super(props);
    this.state = {
      ready : false,
      stateLogin: false,
    }
  }

  navigation = this.props.navigation;

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({stateLogin: true, ready: true });
        console.log(user);
        this.ready = true;
        //this.navigation.push('Levels');
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
    
  }
  
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '376767086525-ufioo6rnbc890repj2b87c8tt0nqgml3.apps.googleusercontent.com',
        iosClientId: '376767086525-kgcvdp051mf3qe35na2cbg5vsipmd6e7.apps.googleusercontent.com',
        scopes: ['profile'],
      });
      if (result.type === 'success') {
        console.log('asdasd');
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken,
        );
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential);
        // console.log(result);
        // return result.accessToken;
        // this.navigation.navigate('Levels');
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
          .then((data) => {
            console.log(data);
           // this.navigation.navigate('Levels');
          })
          .catch((err) => console.log(err));
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  }
  ComponentIndicator = ()=> {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  render() {
    if(this.state.ready === false){
      return (<this.ComponentIndicator/>)
    }
    else if(this.state.stateLogin === false) {
      return (
        <Login>
          <View style={styles.button}>
            <Button
              onPress={this.logInFacebook}
              title="Tiếp tục đăng nhập bằng Facebook"
              color="#4267b2"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.signInWithGoogleAsync}
              title="Tiếp tục đăng nhập bằng Google"
              color="#e73232"
            />
          </View>
        </Login>
      );
    } else {
      //this.navigation.setParams({ title: 'Level' }) 
      return (<Levels navigation={this.navigation}/>)
    }
   
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: screen(5),
    width: screen(80),
    marginLeft: screen(10),
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
