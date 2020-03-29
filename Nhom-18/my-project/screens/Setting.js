import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class List extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.typesRank}>
          <Text style={styles.nameRank}>{this.props.name}</Text>
          <Text style={styles.contentRank}>{this.props.content}</Text>
        </View>
      </View>

    );
  }
}

export default class Setting extends Component {
  render() {
    return (
      <ScrollView>
        <List name="BẰNG A1" content="Xe máy" />
        <List name="BẰNG A2" content="Xe mô tô 2 bánh" />
        <List name="BẰNG A3" content="Xe mô tô 3 bánh, xe lam..." />
        <List name="BẰNG A4" content="Máy kéo" />
        <List name="BẰNG B1" content="Ô tô trọng tải dưới 3.500kg" />
        <List name="BẰNG B2" content="Ô tô chở người đến 9 chỗ" />
        <List name="BẰNG C" content="Ô tô tải trên 3.500kg" />
        <List name="BẰNG D" content="Ô tô chở người từ 10-30 chỗ" />
        <List name="BẰNG E" content="Ô tô chở người trên 30 chỗ" />
        <List name="BẰNG F" content="Điều khiển các loại kéo móc" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    justifyContent: 'center',
  },
  typesRank: {
    backgroundColor: '#fff',
    flexDirection: "row",
    margin: 2,
    padding: 15,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  nameRank: {
    fontWeight: 'bold',
  },
  contentRank: {
    marginLeft: 31,
    color: '#A4A4A4'
  }
});