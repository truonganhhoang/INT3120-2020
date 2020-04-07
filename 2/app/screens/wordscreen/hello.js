/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HelloScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name={'chevron-left'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={{flex: 4, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                marginBottom: 5,
              }}>
              Hello
            </Text>
            <Text style={{color: '#9e9e9e', marginBottom: 5}}>Xin chào</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Hello')}>
          <View style={({flex: 1}, styles.canchinh)}>
            <FontAwesome5 name={'volume-up'} size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name={'chevron-left'} color={'#000'} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name={'chevron-right'} color={'#000'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#12a6e4',
  },
  content: {
    backgroundColor: '#fff',
  },
  item: {
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    marginBottom: 50,
    // eslint-disable-next-line no-dupe-keys
    marginTop: 150,
  },
  canchinh: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 230,
  },
  footer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
  },
});
