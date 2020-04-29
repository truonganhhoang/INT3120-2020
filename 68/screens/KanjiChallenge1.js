import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import KanjiChallenge from '../components/KanjiChallenge';


export default class KanjiChallenge1 extends React.Component {
  static navigationOptions = () => ({
    title: 'Kanji cơ bản 1',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#006265',
    },
  });

  render() {
    // const kanjiList = this.props.navigation.getParam('kanjiList')
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.BarCount} />
        </View>
        <View style={styles.Word}>
          <Text style={styles.WordRandom}>Học</Text>
        </View>
        <View style={styles.content}>
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
          <KanjiChallenge />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006265',
    justifyContent: 'center',

  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8
  },
  Word: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5
  },
  WordRandom: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '700'
  },
  BarCount: {
    height: 20,
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  top: {
    flex: 0,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
});
