import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import auth from '../firebaseApi/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Button, SocialIcon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

let heightPhone = Dimensions.get('window').height;

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }

  back = () => {
    this.props.navigation.navigate('Setting');
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#23a6d5', '#23d5ab']} style={styles.background}>
          <View style={[styles.logo,{flex: 1}]}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              style={{ paddingLeft: '10%', color: '#fff', paddingTop: '10%' }}
              onPress={() => this.back()}
            />
            <View style={{alignItems:'center'}}>
              <Image
                source={require('../../image/icon.png')}
                style={{ width: 80, height: 80}}
              />
              <Text
                style={{
                  fontSize: 25,
                  letterSpacing: 4,
                  fontWeight: 'bold',
                  color: '#fff',
                  marginTop: 20,
                }}
              >
                TIME TABLE
              </Text>
            </View>
          </View>
          <View style={styles.login}>
            <View style={{ paddingLeft: 40, paddingRight: 40 }}>
              <View style={styles.padding} />
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
              <View style={styles.padding} />
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
              <View style={styles.padding} />
              <Input
                label="Retype Password"
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
                  this.setState({ password1: text });
                }}
              />

              <View style={{ alignItems: 'center' }}>
                <View style={{ height: heightPhone * 0.03 }} />
                <View style={{ width: '80%' }}>
                  <Button
                    title="SIGN UP"
                    titleStyle={{ fontWeight: 'bold', letterSpacing: 1 }}
                    buttonStyle={{ borderRadius: 30, height: 55, backgroundColor: '#23a6d5' }}
                    onPress={async () => {
                      if (this.state.password == this.state.password1) {
                     //   await auth.signUpWithEmail(this.state.email, this.state.password);
                        await auth.linkWithEmail(this.sate.email, this.state.password);
                      } else alert('Password is incorrect!');
                    }}
                  />
                </View>
                <View style={{ height: heightPhone * 0.02 }} />
                <Text style={{ fontSize: 20 }}>-----Or-----</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: '80%' }}>
                    <SocialIcon
                      title="Link with Facebook"
                      type="facebook"
                      button
                      onPress={async () => await auth.linkWithFacebook()}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: heightPhone,
  },
  logo: {
    height: heightPhone * 0.3,
  },
  login: {
    backgroundColor: '#fff',
    height: heightPhone * 0.7,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  padding: {
    height: heightPhone * 0.025,
  },
});
