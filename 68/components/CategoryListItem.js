import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import soccer from '../assets/cup.png';

export default function CategoryListItem(props) {
  const { level, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{level.name}</Text>
        {/* <Image source={soccer} style={styles.categoryImage}></Image> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: '#006265',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    marginBottom: 30,
    borderWidth: 0
  },
  // categoryImage: {
  //     width: 64,
  //     height: 64,
  //     color: 'white'
  // },
  title: {
    fontSize: 21,
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
    color: 'white'
  }
});
