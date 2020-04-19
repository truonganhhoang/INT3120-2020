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

export default function StructureScreen({navigation}) {
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
            Cấu Trúc Câu
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
            <FontAwesome5 name={'facebook-square'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('SubStructure')}>
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
                Cấu Trúc Câu
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* end Cấu trúc câu */}

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
                Các Loại Thì
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Các loại thì */}

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
                Các Loại Câu
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Các loại câu */}

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
                Mệnh Đề
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end mệnh đề */}
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
                Các Câu Giao Tiếp Hàng Ngày
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end các câu giao tiếp hằng ngày */}
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
