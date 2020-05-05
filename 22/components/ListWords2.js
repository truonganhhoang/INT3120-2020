import * as React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  List,
  Text,
  Alert,
  Image,
  ScrollView,
  TextInput,
  ListView,
} from 'react-native';

import Constants from 'expo-constants';

import styles from '../assets/css/css';

const Titles= require('./database.json');
      const LENGTH=Titles.length
class ListWords1 extends React.Component {
  
  constructor(props) {
    let temp=Titles.slice(0, LENGTH);
    super(props);
    this.state = {
      data:temp,
    };
  }
 
  SearchFilterFunction(_text) {
    let temp=Titles.slice(0, LENGTH);
    let newData =temp.filter((item)=>{
      let itemData = item.key.toUpperCase();
      let textData = _text.toUpperCase();
       return itemData.indexOf(textData)>-1;
    });

    this.setState({
      data: newData,
    });
  }

  _Detail = async () => {
    this.props.navigation.navigate('DetailItemComponent');
  };

  Render_FlatList_Sticky_header = () => {
    var Sticky_header_View = (
      <View>
        <View style={styles.banner}>
          <Text style={[styles.paragraph,]} onPress={this._Done}>
            <Image style={[styles.icon_back,]} source={require('../assets/icon/back.png')}/>
            Danh sách từ vựng
          </Text>
        </View>
        <View style={{backgroundColor: '#f8fff9',padding: 10,}}>
          <TextInput
            title="Tìm kiếm"
            placeholder="Tìm kiếm..."
            style={styles.TextInput}
            onChangeText={text => this.SearchFilterFunction(text)}
          />
        </View>
      </View>
    );

    return Sticky_header_View;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles1.button}>
              <Text
                style={styles.text}
                onPress={this._Detail}>
                {item.key}
              </Text>
            </View>
          )}
          ListHeaderComponent={this.Render_FlatList_Sticky_header}
          
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
  _Done = async () => {
    this.props.navigation.navigate('Menu');
  };
}

const styles1 = StyleSheet.create({
  button: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical:5,
    backgroundColor: '#ffffff',
    height: 60,
    borderWidth: 1,
    borderColor: '#dfeae1',
  },
});
export default ListWords1;
