/*This is an Example to Hide/Show View  Component in React Native on button Click*/
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Hide extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerQuestion}>
          Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại
          là gì
        </Text>
        <TouchableHighlight
          activeOpacity={1}
          style={this.state.show ? styles.answer1 : styles.answer}
          onPress={this.ShowHideComponent}
        >
          <Text>Phần mặt đường và lề đường</Text>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={1}
          style={this.state.show ? styles.answer2 : styles.answer}
          onPress={this.ShowHideComponent}
        >
          <Text>Phần đường xe chạy</Text>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={1}
          style={this.state.show ? styles.answer2 : styles.answer}
          onPress={this.ShowHideComponent}
        >
          <Text>Phần đường xe cơ giới</Text>
        </TouchableHighlight>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {this.state.show ? (
          <View style={{ backgroundColor: 'green' }}>
            <Text>Hello World</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  headerQuestion: {
    fontWeight: 'bold',
  },
  answer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  answer1: {
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'green',
  },
  answer2: {
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'red',
  },
});
