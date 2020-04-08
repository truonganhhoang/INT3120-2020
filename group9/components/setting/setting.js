import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Header, Input, Button, ButtonGroup } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';
import { ListItem } from 'react-native-elements';
import auth from '../firebaseApi/auth';
class Setting extends React.Component {
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
});

export default Setting;
