import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import FavoriteKanji from '../components/FavoriteKanji';

export default class FavoriteKanjiScreen extends React.Component {
  static navigationOptions = {

    title: 'Kanji của bạn',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#006265',
    },
  };

  render() {
    return (
      <View>
          <FavoriteKanji/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30
  }
});
