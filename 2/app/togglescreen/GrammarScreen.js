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

export default function GrammarScreen({navigation}) {
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
            Ngữ Pháp Khác
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
                31 từ đẹp nhất trong tiếng Anh
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* end 31 từ đẹp nhất */}

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
                Các lỗi ngữ pháp tiếng Anh thường gặp
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end các lỗi ngữ pháp */}

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
                Thông tin thừa (redundancy)
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end thông tin thừa */}

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
                16 từ viết tắt teen thường dùng
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end 16 từ viết tắt */}
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
                Cách làm bài trắc nghiệm ngữ pháp
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end cách làm bài trắc nghiệm ngữ pháp */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('DirectionsandPlace');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/six.png')}
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
                Tổng hợp mọi thứ về time
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end tổng hợp về time */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('DirectionsandPlace');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/seven.png')}
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
                Một số từ viết tắt thông dụng trong khẩu ngữ
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end một số từ viết tắt thông dụng */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('DirectionsandPlace');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/eight.png')}
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
                Tên một số môn học ở đại học
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end tên một số môn học */}
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
