import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import loadBar from '../assets/loading.png'
import persen from '../assets/percentage.png'
import KanjiLearn from '../components/KanjiLearn'
export default class KanjiLearning extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('kanjiLearningName'),
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
       <View>
         <View style={styles.persen}>
             <Text style={styles.number}>90</Text> 
             <Image source={persen} style={styles.ImagePersen}></Image>
         </View>
         <View>
            <Image source={loadBar} style={styles.loadBar}></Image>
         </View>
         <View style={styles.container}>
           <ScrollView>
              <KanjiLearn/>
              <KanjiLearn/>
              <KanjiLearn/>
              <KanjiLearn/>
            </ScrollView>
         </View>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: '8%',
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
