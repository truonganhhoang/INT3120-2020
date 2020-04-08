import 'react-native-gesture-handler';
import React from 'react';
//import axios from 'axios';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export default class Categories extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Text>Data For Categoy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'stretch',
    justifyContent: 'center'
    // paddingLeft: 10,
    // paddingRight: 10,
    //backgroundColor: '#f7f7f7'
  },
});

