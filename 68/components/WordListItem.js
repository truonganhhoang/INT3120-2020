/* eslint-disable no-console */
import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  YellowBox
} from 'react-native';
import rightArrow from '../assets/right-arrow.png';
import WordItem from './WordItem';

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;
export default function WordListItem(props) {
  const { kanji } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.navigation.navigate('KanjiLearning',
          {
            kanjiGroup: kanji,
            kanjiLearningName: kanji.item.groupName
          });
      }}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>{kanji ? kanji.item.groupName : 'Kanji'}</Text>
            <Image source={rightArrow} style={styles.rightArrowImage} />
          </View>
          <View style={styles.listItem}>
            {
              kanji ? kanji.item.kanjiList.map((object, index) => (
                <WordItem
                  key={index.toString()}
                  text={object.kanji}
                  object={object}
                  navigation={props.navigation}
                />
              )) : <Text />
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginBottom: 12,
    borderWidth: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 17,
    marginBottom: 8,
    color: '#006265'
  },
  rightArrowImage: {
    width: 13,
    height: 13,
    marginTop: 4,
  },
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
