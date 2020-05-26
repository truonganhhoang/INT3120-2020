import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  StyleSheet
} from 'react-native';
import firebase from '../config/firebase';

const deviceWidth = Dimensions.get('window').width;

const screen = (percent) => (deviceWidth * percent) / 100;
const storage = firebase.storage();
const storageRef = storage.ref('imgKanji/35506.svg');

export default function kanjiPanel({ kanji }) {
  const [setUriSvg] = useState('');
  useEffect(() => {
    storageRef.getDownloadURL().then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      setUriSvg(url);
    }).catch(() => {
      // Handle any errors
    });
  }, []);
  return (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View style={styles.KanjiPanel}>
        <View style={styles.centerAlighElement}>
          <Text>{kanji}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  centerAlighElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  KanjiPanel: {
    width: screen(45),
    height: screen(40),
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5,
    elevation: 5,
    marginTop: -20,
  },
});
