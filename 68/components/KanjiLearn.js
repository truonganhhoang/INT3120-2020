import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function KanjiLearn(props) {
  const { image, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image.url} style={styles.ImageChallenge} />
        <View style={styles.constainerTitle}>
          <Text style={styles.title}>{image.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    padding: 16,
    elevation: 4,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 11,
    borderWidth: 0,
    flexDirection: 'row',

  },
  constainerTitle: {
    height: '100%',
    width: '70%',
    marginRight: 0,
  },
  title: {
    fontSize: 19,
    color: '#006265',
    marginLeft: '15%',
  },
  ImageChallenge: {
    width: 30,
    height: 30,
    marginLeft: '2%',
  }
});
