import React from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import loadBar from '../assets/loading.png'
import persen from '../assets/percentage.png'
import menu from '../assets/menu.png'
import flashcard from '../assets/wallet.png'
import test from '../assets/test.png'
import challenge1 from '../assets/mission.png'
import challenge2 from '../assets/top.png'
import KanjiLearn from '../components/KanjiLearn'

export default class KanjiLearning extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('kanjiLearningName'),
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
  constructor(props){
    super(props);
      this.state = {
        images: [
          {id: 1, url: menu, name: 'Kanji chi tiết'},
          {id: 2, url: flashcard, name: 'Học với Flashcards'},
          {id: 3, url: test, name: 'Luyện tập qua bài Tests'},
          {id: 4, url: challenge1, name: 'Thử thách Kanji 1'},
          {id: 5, url: challenge2, name: 'Thử thách Kanji 2'}
        ]
      }
  }

  render(){
    const {images} = this.state;
    const {navigation} =  this.props;
    const groupKanji = navigation.getParam('kanjiGroup');

    return (
       <View>
         <View style={styles.persen}>
             <Text style={styles.number}>90</Text> 
             <Image source={persen} style={styles.ImagePersen}></Image>
         </View>
         <View>
            <Image source={loadBar} style={styles.loadBar}></Image>
         </View>
         <View style={styles.container}>
         {/* <FlatList 
            data={images}
            renderItem = {({item}) => <KanjiLearn image={item} 
            onPress={()=> navigation.navigate('KanjiGroupDetail',{kanjiList : groupKanji.item.kanjiList})}/>}


            
            keyExtractor= {item => `${item.id}`}
            contentContainerStyle={styles.container}
          />
          */}
           <KanjiLearn image={images[0]} onPress={()=> navigation.navigate('KanjiGroupDetail',{kanjiList : groupKanji.item.kanjiList})}/>
           <KanjiLearn image={images[1]} onPress={()=> navigation.navigate('KanjiChallenge1')}/>
           <KanjiLearn image={images[2]} onPress={()=> navigation.navigate('KanjiChallenge1')}/>
           <KanjiLearn image={images[3]} onPress={()=> navigation.navigate('KanjiChallenge1')}/>
           <KanjiLearn image={images[4]} onPress={()=> navigation.navigate('KanjiChallenge1')}/>
         </View>
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
  }
});
