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
class DetailItemComponent extends React.Component {
  //Custom Component for the Expandable List
  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
        
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles1.button}>
            <Text>{this.props.item.key}</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
class ListWords1 extends React.Component {
  
  constructor() {
    super();
    this.state = { listDataSource: Titles };
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

  _Detail(item) {
    this.props.navigation.navigate({item});
  };

  render() {
    return (
      <View style={styles.container}>
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
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            < DetailItemComponent
              key={item.key}
              onClickFunction={this._Detail.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
  _Done = async () => {
    this.props.navigation.navigate('Menu');
  };
}
export default createAppContainer(createSwitchNavigator(
  {
     List:ListWords1,
     QuestionDetail: QuestionDetailScreen,
  },
  {
    initialRouteName: 'List',
  }
  ));

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
