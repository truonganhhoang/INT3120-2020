import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'
import Search from './Search'

import { BorderlessButton } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {

  return (
    <View>
      <View>
        <Search/>
      </View>
      <ScrollView>
        <View style={Styles.container}>
          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='search'
                  type='material'
                  color='#58D3F7'
                  onPress={() => navigation.navigate('TimKiem')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Tìm kiếm</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='handshake-o'
                  type='font-awesome'
                  color='#0080FF'
                  onPress={() => navigation.navigate('ChaoHoi')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Chào hỏi</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='map'
                  type='font-awesome'
                  color='#61210B'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Địa phương</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='alarm'
                  type='material'
                  color='#424242'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Thời gian</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='motorcycle'
                  type='font-awesome'
                  color='#3B240B'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Xe cộ</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='wechat'
                  type='font-awesome'
                  color='#0080FF'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Trò chuyện</Text>
              </View>
            </View>
          </View>

          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='ios-home'
                  type='ionicon'
                  color='#8A0808'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Nhà cửa</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='game-controller'
                  type='entypo'
                  color='#0B2161'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Giải trí</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='traffic'
                  type='material'
                  color='red'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Giao thông</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='smiley'
                  type='octicon'
                  color='#FF8000'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Cảm xúc</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='music'
                  type='font-awesome'
                  color='#210B61'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Âm nhạc</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='film'
                  type='font-awesome'
                  color='#4C0B5F'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Phim</Text>
              </View>
            </View>
          </View>

          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='book'
                  type='material'
                  color='#01A9DB'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Sách</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='map-pin'
                  type='feather'
                  color='red'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Vị trí</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='apple'
                  type='font-awesome'
                  color='#AEB404'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Hoa quả</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='soccer-ball-o'
                  type='font-awesome'
                  color='black'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Thể thao</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='trees'
                  type='foundation'
                  color='#088A08'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Cây cối</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon
                  //reverse='true' đảo màu nền
                  underlayColor='#E6E6E6'
                  name='baidu'
                  type='entypo'
                  color='#3B170B'
                  onPress={() => navigation.navigate('List')}
                  size={50}
                />
                <Text style={Styles.buttonName}>Động vật</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}


const Styles = {
  container: {
    flexDirection: 'row',
    height: 810
  },

  element: {
    flexDirection: 'column',
    flex: 1,
    height: "100%"
  },
  item: {
    width: "100%",
    height: 125,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemConso: {
    width: "80%",
    height: "80%",
    borderRadius: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20
  },

  buttonName: {
    marginTop: 7,
    fontSize: 14,
    textAlign: "center"
  }
};

