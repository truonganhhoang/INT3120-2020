/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function PronounceScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <FontAwesome5 name={'bars'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
            Cách Phát Âm
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
            <FontAwesome5 name={'facebook-square'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/one.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Cách phát âm e - es
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* end phát âm e es */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('GeneralConversation');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/two.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Các phát âm -ed
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end phát âm ed */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Number');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/three.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Quy tắc trọng âm
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end quy tắc trọng âm */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('TimeandDate');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/four.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Cách đọc 33 ký tự đặc biệt trong tiếng Anh
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end 33 ký tự */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('DirectionsandPlace');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/five.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Phát âm đúng cách
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end phát âm đúng cách */}
      </ScrollView>
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
  },
  iconitem: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',

    margin: 20,
  },
  itemtool: {
    marginTop: 5,
    marginLeft: 40,
  },
});
