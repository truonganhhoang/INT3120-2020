import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
export default function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <ImageBackground style={{backgroundColor: 'blue'}}>
        <View style={{padding: 15}}>
          <Image
            source={{
              uri:
                'https://www.getgsi.com/wp-content/uploads/2019/05/tease.png',
            }}
            style={styles.iconApp}
          />
          <Text style={styles.textApp}>10 VẠN CÂU HỎI VÌ SAO</Text>
          <Text style={styles.content}>
            Ứng dụng 10 vạn câu hỏi vì sao phổ biến kiến thức khoa học dành cho
            mọi lứa tuổi
          </Text>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => <Text>Cài đặt</Text>}
          onPress={() => props.navigation.closeDrawer()}
          icon={() => <Icon name="settings" size={30} color="yellow" />}
          style={styles.hr}
        />
        <TouchableOpacity
          // onPress={() =>
          // }
          >
          {/* <DrawerItem
            label={() => <Text>Chia sẻ</Text>}
            icon={() => <Icon name="share-variant" size={30} color="yellow" />}
          /> */}
          <View style={styles.btnClickContain}>
          <Icon name="share-variant" size={30} color="yellow" />
          <Text style={{paddingLeft: 30}}>Chia sẻ</Text>
          </View>
        </TouchableOpacity>
        {/* <DrawerItem
          label={() => <Text>Đánh giá</Text>}
          onPress={() => props.navigation.toggleDrawer()}
          icon={() => <Icon name="star-outline" size={30} color="yellow" />}
        /> */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://play.google.com/store/apps/details?id=com.noobstudio.cauhoivisao')
          }>
          <View style={styles.btnClickContain}>
          <Icon name="star-outline" size={30} color="yellow" />
          <Text style={{paddingLeft: 30}}>Đánh giá</Text>
          </View>
        </TouchableOpacity>
        {/* <DrawerItem
          label={() => <Text>Góp ý</Text>}
          onPress={() => props.navigation.toggleDrawer()}
          icon={() => <Icon name="email-open" size={30} color="yellow" />}
        /> */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://maps.google.com?q=stack+overflow+offices')
          }>
          <View style={styles.btnClickContain}>
          <Icon name="email-open" size={30} color="yellow" />
          <Text style={{paddingLeft: 30}}>Góp ý</Text>
          </View>
        </TouchableOpacity>
        {/* <DrawerItem
          label={() => <Text>Ứng dụng khác</Text>}
          onPress={() => props.navigation.toggleDrawer()}
          icon={() => <Icon1 name="nav-icon-grid" size={28} color="yellow" />}
          style={{paddingLeft: 4}}
        /> */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://play.google.com/store/apps/dev?id=6177645018936344750')
          }>
          <View style={styles.btnClickContain}>
          <Icon1 name="nav-icon-grid" size={28} color="yellow" />
          <Text style={{paddingLeft: 30}}>Ứng dụng khác</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    backgroundColor: '#99ccff',
  },
  iconApp: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  hr: {
    borderBottomColor: '#d6d6c2',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textApp: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  content: {
    color: 'white',
    paddingTop: 5,
    fontSize: 15,
  },
  btnClickContain:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 15,
  }
});
