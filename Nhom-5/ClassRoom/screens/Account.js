import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nguyễn Hoàng Tuyên",
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Avatar size={100} rounded title={getName(this.state.name).charAt(0)} style={styles.avatar} overlayContainerStyle={{backgroundColor: '#3498db'}}/>
        <Text style={styles.userName}>{this.state.name}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 3,
    marginLeft: -10,
  },
  userName: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#777',
    lineHeight: 24,
    textAlign: 'center',
  },
});

function getName(name) {
  var array = name.split(" ");
  return array[array.length - 1];
}
