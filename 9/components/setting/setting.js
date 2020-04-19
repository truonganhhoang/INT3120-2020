import React from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { Header, Input, Button, ButtonGroup, Overlay } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';
import { ListItem } from 'react-native-elements';
import auth from '../firebaseApi/auth';

let heightPhone = Dimensions.get('window').height;

class Setting extends React.Component {
  
  state = {
    onChangePass : false,

  };
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={<Text style={styles.title}>SETTINGS</Text>}
          containerStyle={{
            height: 100,
            backgroundColor: '#fff',
          }}
        />

        <View style={styles.profile}>
          <Ionicons
            name="ios-contact"
            size={45}
            style={{ color: '#4f6a6e', paddingBottom: '2.5%' }}
          />
          <Text style={{ color: '#4f6a6e', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}>
            PROFILE
          </Text>
        </View>

        <View style={styles.information}>
          <ListItem
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            title="Name"
            subtitle="Quyet Nguyen"
            titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
            chevron
            style={styles.list}
          />
        </View>
        <View>
          <ListItem
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            title="Change Password"
            titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
            chevron
            onPress ={ () => this.setState({ onChangePass : true }) }
  //          onPress={() =>
  //            Alert.alert(
  //              'Change Password',
  //              'Do you want change your password?',
  //              [{ text: 'YES', onPress: this.setState({ onChangePass: true })}, { text: 'NO' }],
  //              { cancelable: false }
  //            )
  //          }
            style={styles.list}
          />
          <Overlay
            isVisible={this.state.onChangePass}
            onBackdropPress={() => this.setState({ onChangePass: false })}
          >
          <Text style={{ color: '#4f6a6e', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}>
            Change Password</Text>
              <View style={styles.padding} />
              <Input
                label="Enter Your Password"
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
                  this.setState({ currentPassword: text });
                }}
              />
              <View style={styles.padding} />
              <Input
                label="New Password"
                labelStyle={{ fontSize: 15, letterSpacing: 1, fontWeight: 'bold', paddingLeft: 13 }}
                placeholder="New Password"
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
                label="Retype New Password"
                labelStyle={{ fontSize: 15, letterSpacing: 1, fontWeight: 'bold', paddingLeft: 13 }}
                placeholder="New Password"
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
              <View style ={styles.padding} />
              <View style ={styles.padding} />
              <View style ={{width : '40%', flexDirection:'row'}} >
              <Button
                title="Change Password"
                titleStyle={{ fontWeight: 'bold', letterSpacing: 1 }}
                buttonStyle={{ borderRadius: 25, height: 50, backgroundColor: '#23a6d5', alignItems:'flex-end' }}
                onPress={async () => {
                  if (this.state.password != this.state.password1) alert('New Password is incorrect!'); else
                  if (this.state.currentPassword !=  this.state.oldPassowrd) alert('Current Password is incorrect!'); else 
                  if (this.state.currentPassword == this.state.paswword) alert('New password is the same Current Passowrd!'); else {
                  }
                }}
              />
              </View>
          </Overlay>
        </View>
        <ListItem
          Component={TouchableScale}
          friction={90}
          tension={100}
          activeScale={0.95}
          title="Log Out"
          titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
          onPress={() =>
            Alert.alert(
              'Log Out',
              'Do you want logout?',
              [{ text: 'YES', onPress: () => auth.signOut() }, { text: 'NO' }],
              { cancelable: false }
            )
          }
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    letterSpacing: 1,
  },
  title: {
    letterSpacing: 4,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f6a6e',
  },
  profile: {
    alignItems: 'center',
    paddingTop: '5%',
  },
  list: {},
  padding: {
    height: heightPhone * 0.025,    
  },
});

export default Setting;
