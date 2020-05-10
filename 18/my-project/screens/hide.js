/*This is an Example to Hide/Show View  Component in React Native on button Click*/
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

var data1 = [
  {
    header:
      'Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì',
    answer: [
      {
        content: 'Phần mặt đường và lề đường',
        value: true,
      },
      {
        content: 'Phần đường xe chạy',
        value: true,
      },
      {
        content: 'Phần đường xe cơ giới',
        value: false,
      },
    ],
  },
];

export default class Hide extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      show1: true,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  ShowHideComponen = () => {
    if (this.state.show1 == true) {
      this.setState({ show1: false });
    } else {
      this.setState({ show1: true });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.headerQuestion}>{item.header}</Text>
              <FlatList
                data={item.answer}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  item.value ? (
                    <TouchableHighlight
                      activeOpacity={1}
                      style={this.state.show ? styles.answer1 : styles.answer}
                      onPress={this.ShowHideComponent}
                    >
                      <Text>{item.content}</Text>
                    </TouchableHighlight>
                  ) : (
                    <TouchableHighlight
                      activeOpacity={1}
                      style={this.state.show1 ? styles.answer2 : styles.answer}
                      onPress={this.ShowHideComponen}
                    >
                      <Text>{item.content}</Text>
                    </TouchableHighlight>
                  )
                }
              />
            </View>
          )}
        />
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
