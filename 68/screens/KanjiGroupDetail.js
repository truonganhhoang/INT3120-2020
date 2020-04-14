import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import KanjiCard from '../components/KanjiCard';
const deviceWidth = Dimensions.get('window').width;

export default class KanjiGroupDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title:'Kanji cơ bản 1',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265',
        },
    };
  };
  // constructor({text, navigation, object}){
  //   super({text, navigation, object});
  // }
  render(){
    const {navigation} =  this.props;
    const kanjiList = navigation.getParam('kanjiList')

    return (
      <ScrollView>
       <View style={styles.listItem}>
       
         {
           kanjiList.map((kanjiItem)=><KanjiCard kanjiText={kanjiItem.kanji} onPress={()=> navigation.navigate('KanjiDetail')}/>)
         }
       </View>
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    marginHorizontal: 8
  },
  ImagePersen: {
    width: 13,
    height: 13,
    marginTop: 25,
  },
  persen: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number: {
    marginRight: 2,
    marginTop: 21,
    color: '#006265',
    fontSize: 16
  },
  loadBar: {
    marginTop: '0%',
    marginLeft: '23%',
    width: 190,
    height: 16,
    borderRadius: 15,
  },
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap'
}
});
