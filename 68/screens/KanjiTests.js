import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import KanjiTest from '../components/KanjiTest';
import ProgressCount from '../components/ProgressCount'

export default class KanjiTests extends React.Component {
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
          <Text>Câu hỏi 1/10</Text>
          <View />
          <ProgressCount/>
        </View>
        <View style={styles.Word}>
          <Text style={styles.WordRandom}>モン</Text>
        </View>
        <View style={styles.content}>
          <KanjiTest />
          <KanjiTest />
          <KanjiTest />
          <KanjiTest />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
  },
  Word: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  WordRandom: {
    fontSize: 50,
    color: '#006265',
    fontWeight: '700'
  },
  BarCount: {
    height: 10,
    width: '70%',
    backgroundColor: '#DDD',
    borderRadius: 5,
  },
  top: {
    flex: 0,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
