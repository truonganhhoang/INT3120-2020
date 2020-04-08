import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import {Avatar, Header} from 'react-native-elements';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Avatar rounded title={item.name.charAt(0)} size={70} />
      <View style={{alignItems: 'baseline',flex:1}}>
        <Text style={{fontWeight: 'bold', paddingLeft: 20}}>{item.name}</Text>
        <Text style={{paddingLeft: 20}}>{item.question}</Text>
        <TouchableOpacity
          style={{
            height: 50,
            alignItems: 'flex-start',
          }}>
          <Text style={{color:"green", paddingLeft: 20}}>Trả lời</Text>
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
        name: 'Tuyên',
        question: 'Hỏi cách tính chu vi hình tròn?',
      },
      {
        id: '2',
        name: 'Kaidou',
        question: 'Hỏi cách tính chu vi hình tròn?',
      },
      {
        id: '3',
        name: 'Bigmom',
        question: 'Hỏi cách tính chu vi hình tròn?',
      },
      {
        id: '4',
        name: 'Shank',
        question: 'Hỏi cách tính chu vi hình tròn?',
      },
      {
        id: '5',
        name: 'Roger',
        question: 'Hỏi cách tính chu vi hình tròn?',
      },
      {
        id: '6',
        name: 'Newgate',
        question: 'Hỏi cách tính chu vi hình tròn?',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            text: 'HỎI ĐÁP',
            style: {color: '#000', fontWeight: 'bold'},
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
    margin: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
