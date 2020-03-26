import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class Index extends Component {
  render() {
    return (
      <View>
        <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()} />
        <Text>Hello Word!</Text>
      </View>
    );
  }
}

