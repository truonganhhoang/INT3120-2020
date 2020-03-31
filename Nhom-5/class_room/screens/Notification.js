import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import {Avatar, Header} from 'react-native-elements';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{alignItems: 'baseline',flex:1}}>
        <TouchableOpacity>
          <Text style={{paddingLeft: 20}}>{item.content}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default class App extends React.Component {
  state = {
    data: [
      {
        id: '1',
        content: 'Bigmom đã trả lời câu hỏi của bạn',
      },
      {
        id: '2',
        content: 'Nhắc nhở kiểm tra 15p lớp thể dục',
      },
      {
        id: '3',
        content: 'Đã có bài tập mới trong lớp Toán xyz',
      },
      {
        id: '4',
        content: 'Bạn đã bị loại khỏi lớp Văn',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: 'THÔNG BÁO',
            style: {color: '#000', fontWeight: 'bold', width: 500},
          }}
          containerStyle={{
            backgroundColor: '#FFF',
            justifyContent: 'center',
          }}
        />
        <FlatList
          style={{flex:1, marginTop: 20}}
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  listItem: {
    margin: 10,
    borderBottomColor: '#000',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
