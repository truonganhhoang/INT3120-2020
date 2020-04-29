import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import firebase from '../config/firebase';

const deviceWidth = Dimensions.get('window').width;

// eslint-disable-next-line no-mixed-operators
const screen = (percent) => deviceWidth * percent / 100;
const storage = firebase.storage();
const storageRef = storage.ref('imgKanji/35506.svg');

export default function Speaker() {
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
          <SvgUri width="100%" height="100%" uri="https://firebasestorage.googleapis.com/v0/b/perfect-tape-242508.appspot.com/o/imgKanji/35506.svg?alt=media&token=b93b88d8-43a7-47e2-ad74-6b9a34359067" />
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
