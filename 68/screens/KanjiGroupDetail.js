import React from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import KanjiCard from '../components/KanjiCard'
export default class KanjiGroupDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title:'Kanji cơ bản 1',
        headerTitleStyle: {
          textAlign: 'center',
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265',
        },
    };
  };
  render(){
    return (
       <View style={styles.listItem}>
            <KanjiCard/>
            <KanjiCard/>
            <KanjiCard/>
            <KanjiCard/>
            <KanjiCard/>
            <KanjiCard/>
            <KanjiCard/>
            <KanjiCard/>
       </View>
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
