import React from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { Header, Input, Button, ButtonGroup, Overlay } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';
import { ListItem } from 'react-native-elements';
import auth from '../firebaseApi/auth';
import { getInfo, updateInfo } from '../firebaseApi/user';

let heightPhone = Dimensions.get('window').height;

class Setting extends React.Component {
  state = {
    onChangePass: false,
    userInfo: {},
    onChangeInfo: false,
    changeInfo : {},
    login: true,
  };

  componentDidMount = async () => {
    let userInfo = await getInfo();
    if (userInfo==undefined) {
      userInfo = {};
      this.setState({ login: false });
    }
    this.setState({userInfo : userInfo});
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
        </View>
        <View style={{height: 50}} />
        <Text style={styles.titleGroup}>Your Information</Text>
        { this.state.login && (
          <View>
            <View style={styles.information}>
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.95}
                title="Name"
                subtitle={this.state.userInfo.displayName}
                titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
                chevron
                style={styles.list}
              />
            </View>
            <View style={styles.information}>
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.95}
                title="Email"
                subtitle={this.state.userInfo.email}
                titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
                chevron
                style={styles.list}
              />
            </View>
            <View style={styles.information}>
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.95}
                title="Phone Number"
                subtitle={this.state.userInfo.phoneNumber}
                titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
                chevron
                style={styles.list}
              />
            </View>
          </View>
        )}
        {!this.state.login && (
          <View>
            <View>
              <Text style={styles.warning}> You don't have an account. Do you want save your calendar? 
              </Text>
              <Text style={styles.warning}> Link your app with Email or Facebook now. </Text> 
          </View>
          <ListItem
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            title="Link with Email"
            titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
            chevron
            onPress={() => auth.linkWithEmail()}
            style={styles.list}
          />
          <ListItem
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            title="Link with Facebook"
            titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
            chevron
            onPress={() => auth.linkWithFacebook()}
            style={styles.list}
          />
          
          </View>
        )}
        <View style={{height: 50}} />
        <Text style={styles.titleGroup}> Setting </Text>
        <View>
          <ListItem
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            title="Change Info"
            titleStyle={{ fontWeight: 'bold', letterSpacing: 1, color: '#4f6a6e' }}
            chevron
            onPress={() => {
              this.setState({ onChangeInfo: true })
              this.setState({ changeInfo: this.state.userInfo })
            }}
            style={styles.list}
          />
          <Overlay
            isVisible={this.state.onChangeInfo}
            onBackdropPress={() => this.setState({ onChangeInfo: false })}
          >
            <Text style={{ color: '#4f6a6e', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}>
              Change User Info
            </Text>
            <View style={styles.padding} />
            <Input
              label="Name"
              labelStyle={{ fontSize: 15, letterSpacing: 1, fontWeight: 'bold', paddingLeft: 13 }}
              value={this.state.changeInfo.displayName}
              leftIcon={
                <Ionicons
                  name="ios-finger-print"
                  size={30}
                  style={{ paddingRight: 20, color: '#1976D2' }}
                />
              }
              onChangeText={(text) => {
                let info = this.state.changeInfo;
                info.displayName = text;
                this.setState({ changeInfo : info });
              }}
            />
            <View style={styles.padding} />
            <Input
              label="Phone Number"
              labelStyle={{ fontSize: 15, letterSpacing: 1, fontWeight: 'bold', paddingLeft: 13 }}
              value = {this.state.changeInfo.phoneNumber}
              leftIcon={
                <Ionicons
                  name="ios-finger-print"
                  size={30}
                  style={{ paddingRight: 20, color: '#1976D2' }}
                />
              }
              onChangeText={(text) => {
                let info = this.state.changeInfo;
                info.phoneNumber = text;
                this.setState({ changeInfo : info });
              }}
            />
            <View style={styles.padding} />
            <View style={styles.padding} />
              <Button
                title="Change Info"
                titleStyle={{ fontWeight: 'bold', letterSpacing: 1 }}
                buttonStyle={{
                  borderRadius: 25,
                  backgroundColor: '#23a6d5',
                }}
                onPress={async () => {
                  this.setState({ userInfo: this.state.changeInfo });
                  if (await updateInfo(this.state.userInfo)) alert("Successful"); else alert("Unsuccessfull");
                }}
              />
          </Overlay>
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
            onPress={() => this.setState({ onChangePass: true })}
            style={styles.list}
          />
          <Overlay
            isVisible={this.state.onChangePass}
            onBackdropPress={() => this.setState({ onChangePass: false })}
          >
            <Text style={{ color: '#4f6a6e', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}>
              Change Password
            </Text>
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
            <View style={styles.padding} />
            <View style={styles.padding} />
            <View style={{}}>
              <Button
                title="Change Password"
                titleStyle={{ fontWeight: 'bold', letterSpacing: 1 }}
                buttonStyle={{
                  borderRadius: 25,
                  backgroundColor: '#23a6d5',
                  alignItems: 'flex-end',
                }}
                onPress={async () => {
                  if (this.state.password != this.state.password1)
                    alert("Those new passwords didn't match. Try again");
                  else if (this.state.password == this.state.currentPaswword) 
                    alert("New Password is same with Current Password. Try Again");
                 else { 
                    let ret = await auth.changePassword(
                      this.state.currentPassword,
                      this.state.password
                    );
                    alert(ret[1]);
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
  titleGroup: {
    paddingLeft: 5,
    fontSize: 25,
    fontWeight:'bold',
    color: '#4f6a6e',
  },
  padding: {
    height: heightPhone * 0.025,
  },
  warning: {
    fontSize: 20,
    color: '#FDD835'
  },
});

export default Setting;
