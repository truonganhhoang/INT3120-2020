import React from 'react';
import { 
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import WordsListItem from '../components/WordListItem'
export default class Category extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('categoryName'),
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
  constructor(props){
    super(props);
      this.state = {
        wordsList: [
          {id: 1, name: 'Kanji cơ bản 1'},
          {id: 2, name: 'Kanji cơ bản 2'},
          {id: 3, name: 'Số đếm'},
          {id: 4, name: 'Kanji cơ bản 3'},
          {id: 5, name: 'Kanji các bộ'},
          {id: 6, name: 'Kanji cơ bản 4'},
          {id: 7, name: 'Kanji cơ bản 5'},
          {id: 8, name: 'Kanji về tính từ 1'},
          {id: 9, name: ' Kanji về động từ'},
          {id: 10, name: 'Kanji về thời gian'},
        ]
      }
  }
  render(){
    return (
       <View style={styles.container}>
          <FlatList
              data={this.state.wordsList}
              renderItem = {({item}) => 
            <WordsListItem words={item}/>
          }
          keyExtractor= {item => `${item.id}`}
        />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3
  },
});
