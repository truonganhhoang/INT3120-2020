import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.navigation.getParam('curUser');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.user.uid}</Text>
      </View>
    );
  }
}
export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
