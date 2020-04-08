import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
import KanjiFlashCard from '../components/KanjiFlashCard'
const deviceWidth = Dimensions.get('window').width;

export default class KanjiFlashCards extends React.Component {
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
  render(){
    // const kanjiList = this.props.navigation.getParam('kanjiList')
    return (
        <ScrollView 
            horizontal
        >
         <View style={styles.container}>
           <KanjiFlashCard/>
           <KanjiFlashCard/>
           <KanjiFlashCard/>
           <KanjiFlashCard/>
           <KanjiFlashCard/>
        </View>
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    paddingLeft:14,
    paddingRight: 14,
  },
});
