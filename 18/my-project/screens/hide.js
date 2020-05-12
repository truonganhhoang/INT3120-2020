/*This is an Example to Hide/Show View  Component in React Native on button Click*/
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  _renderAnswer = (listsItem) => {
    return (
      <FlatList
        data={listsItem}
        keyExtractor={(index1) => index1.content}
        renderItem={({ item }) => (
          <View style={styles.lists}>
            <TouchableHighlight style={styles.iconSelect}>
              <AntDesign
                name={item.value ? 'checkcircleo' : 'closecircleo'}
                size={30}
                color={item.value ? 'green' : 'red'}
              />
            </TouchableHighlight>
            <View style={styles.select}>
              <Text style={item.value ? styles.answer1 : styles.answer2}>
                {item.content}
              </Text>
            </View>
          </View>
        )}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={data1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.headerQuestion}>{item.header}</Text>
                {this._renderAnswer(item.answer)}
              </View>
            )}
            extraData={this.state}
          />
        </View>
        <View style={styles.Ex}>
          <View style={styles.headerEx}>
            <AntDesign name="message1" size={30} color="green" />
            <Text style={styles.status}>Giải thích đáp án</Text>
          </View>
          <View
            style={{
              backgroundColor: '#88CB8C',
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text>
              Phan đáp án của câu hỏi này Phan đáp án của câu hỏi nàyPhan đáp án
              của câu hỏi nàyPhan đáp án của câu hỏi này
            </Text>
          </View>
        </View>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {/* {this.state.show ? (
          <View style={{ backgroundColor: 'green' }}>
            <Text>
              Phan dap an cua cau hoi se nam day Phan dap an cua cau hoi se nam
              day Phan dap an cua cau hoi se nam day
            </Text>
          </View>
        ) : null} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  headerQuestion: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  iconSelect: {
    marginHorizontal: 10,
  },
  lists: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 2,
    borderColor: '#D0D0D0',
    borderTopWidth: 1,
  },
  select: {
    flex: 1,
    justifyContent: 'center',
  },
  answer1: {
    color: 'green',
  },
  answer2: {
    color: 'red',
  },
  Ex: {
    borderColor: '#D0D0D0',
    borderTopWidth: 1,
    flex: 1,
    paddingVertical: 10,
  },
  headerEx: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  status: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingStart: 10,
  },
});
