import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import auth from './firebaseApi/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Button, SocialIcon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmail } from './firebaseApi/auth'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  back = () => {
    this.props.navigation.navigate('HelloScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#23a6d5', '#23d5ab']} style={styles.background}>
          <View style={styles.logo}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              style={{ paddingLeft: '10%', color: '#fff', paddingTop: '10%' }}
              onPress={() => this.back()}
            />
            <Image
              source={require('../image/icon.png')}
              style={{ width: 80, height: 80, marginTop: '7%', marginLeft: '40%' }}
            />
            <Text
              style={{
                fontSize: 25,
                letterSpacing: 4,
                fontWeight: 'bold',
                color: '#fff',
                marginLeft: '25%',
                marginTop: 20,
              }}
            >
              {' '}
              TIME TABLE{' '}
            </Text>
          </View>
          <View style={styles.login}>
            <View style={{ paddingLeft: 40, paddingRight: 40 }}>
              <View style={{ height: 30 }} />
              <Input
                label="Your Email Address"
                labelStyle={{ fontSize: 15, letterSpacing: 1, fontWeight: 'bold', paddingLeft: 13 }}
                placeholder="example@address.com"
                leftIcon={
                  <Ionicons
                    name="ios-mail"
                    size={30}
                    style={{ paddingRight: 20, color: '#1976D2' }}
                  />
                }
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              />
              <View style={{ height: 20 }} />
              <Input
                label="Password"
                labelStyle={{ fontSize: 15, letterSpacing: 1, fontWeight: 'bold', paddingLeft: 13 }}
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={
                  <Ionicons
                    name="ios-finger-print"
                    size={30}
                    style={{ paddingRight: 20, color: '#1976D2' }}
                  />
                }
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
              />

              <View style={{ alignItems: 'center' }}>
                <View style={{ height: 30 }} />
                <View style={{ width: '80%' }}>
                  <Button
                    title="SIGN IN"
                    titleStyle={{ fontWeight: 'bold', letterSpacing: 1 }}
                    buttonStyle={{ borderRadius: 30, height: 55, backgroundColor: '#23a6d5' }}
                    onPress={() => auth.signInWithEmail(this.state.email, this.state.password)}
                  />
                </View>
                <View style={{ height: 10 }} />
                <Text style={{ fontSize: 20 }}>-----Or-----</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: '80%' }}>
                    <SocialIcon
                      title="Sign in with Facebook"
                      type="facebook"
                      button
                      onPress={() => auth.signInWithFacebook()}
                    />
                  </View>
                </View>
                <View style={{ height: 20 }} />
                <Text style={{ fontSize: 15, color: '#939393', fontWeight: 'bold' }}>
                  Don't have Account? Sign Up
                </Text>
                <Text
                  onPress={() => auth.signInAnonymously()}
                  style={{ fontSize: 17, color: '#23d5a6', fontWeight: 'bold' }}
                >
                  Use Anonymous? Sign In Anonymously
                </Text>
                <View style={{ height: 20 }} />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: '100%',
  },
  logo: {
    height: '37%',
  },
  login: {
    backgroundColor: '#fff',
    height: '63%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});