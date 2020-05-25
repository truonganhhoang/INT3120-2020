import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import KanjiCard from '../components/KanjiCard';


export default class KanjiGroupDetail extends React.Component {
  static navigationOptions = () => ({
    title: 'Kanji chi tiết',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#006265',
    },
  });

  // constructor({text, navigation, object}){
  //   super({text, navigation, object});
  // }
  render() {
    const { navigation } = this.props;
    const kanjiList = navigation.getParam('kanjiList');
    return (
      <ScrollView>
        <View style={styles.listItem}>
          {
            kanjiList.map((kanjiItem, i) => (
              <KanjiCard
                key={i.toString()}
                hantu={kanjiItem.hantu}
                kanjiText={kanjiItem.kanji}
              />
            ))
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
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
