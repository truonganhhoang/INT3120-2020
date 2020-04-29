import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import KanjiFlashCard from '../components/KanjiFlashCard';

export default class KanjiFlashCards extends React.Component {
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
    return (
      <ScrollView
        horizontal
      >
        <View style={styles.container}>
          <KanjiFlashCard />
          <KanjiFlashCard />
          <KanjiFlashCard />
          <KanjiFlashCard />
          <KanjiFlashCard />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
  },
});
