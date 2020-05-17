import React from 'react';
import {
  ActivityIndicator, StyleSheet, Dimensions, View
} from 'react-native';
import { Image, ListItem, Button } from 'react-native-elements';

import avatar from '../assets/HoaHuongDuong.jpg';
import EmailProfile from '../assets/email.png';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => ((deviceWidth * percent) / 100);

export default class ProfileScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Profile',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#006265',
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ava}>
          <Image
            source={avatar}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View>
          <ListItem
            leftAvatar={(
              <Image
                source={EmailProfile}
                style={styles.email}
                PlaceholderContent={<ActivityIndicator />}
              />
            )}
            title="Email"
            subtitle="nguyenvantuhym@gmail.com"
            bottomDivider
          />
        </View>
        <Button
          title="Logout"
          type="clear"
          titleStyle={styles.logout}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: screen(2)
  },
  image: {
    width: screen(40),
    height: screen(40),
    borderRadius: screen(50),
  },
  ava: {
    paddingLeft: screen(30),
    paddingTop: screen(2),
    marginBottom: screen(5)
  },
  email: {
    width: screen(10),
    height: screen(10),
  },
  logout: {
    color: '#006265',
    fontSize: 20
  }
});
