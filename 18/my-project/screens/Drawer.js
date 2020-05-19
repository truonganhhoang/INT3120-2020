import React from 'react';
import {
  View,
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Tutorial from './Tutorial';
import Skill from './Skill';
import Policy from './Policy';
import MyStackHome from './Stack';
import { ScrollView } from 'react-native-gesture-handler';
//Phần Menu hiện ra màn hình
function CustomDrawerContent(props) {
  // var { width } = Dimensions.get('window');
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri:
            'https://images.all-free-download.com/images/graphiclarge/traffic_background_pedestrian_car_icons_cartoon_sketch_6840605.jpg',
        }}
        style={{ width: undefined, padding: 16, paddingTop: 100, height: 200 }}
      ></ImageBackground>
      <View style={styles.container}>
        <DrawerItemList {...props} />
      </View>
    </ScrollView>
  );
}
//Tạo điều hướng Drawer
const Drawer = createDrawerNavigator();

function MyDrawer() {
  // const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      // drawerStyle={dimensions.width > 900 ? 'permanent' : 'front'}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      backBehavior="initialRoute"
      drawerStyle={{}}
      drawerContentOptions={{
        activeTintColor: '#66bb6a',
        itemStyle: { width: 500 },
      }}
    >
      {/* <Drawer.Screen
        name="Screens"
        component={MyStack}
        options={{ gestureEnabled: true }}
      /> */}
      <Drawer.Screen
        name="Home"
        component={MyStackHome}
        options={{
          drawerLabel: 'Học bằng lái xe',
          unmountOnBlur: true,
          drawerIcon: ({ activeTintColor }) => (
            // <Image
            //   source={{
            //     uri:
            //       'https://i.pinimg.com/564x/00/60/7d/00607d58a568323d72402cae2c7a548c.jpg',
            //   }}
            //   style={[styles.icon, { activeTintColor: activeTintColor }]}
            // />
            <Icon size={30} color={activeTintColor} name="car" />
          ),
        }}
      />
      <Drawer.Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          drawerLabel: 'Hướng dẫn sử dụng',
          unmountOnBlur: true,
          drawerIcon: ({ activeTintColor }) => (
            <Icon
              size={30}
              color={activeTintColor}
              name="information-outline"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Skill"
        component={Skill}
        options={{
          drawerLabel: 'Kỹ năng lái xe',
          unmountOnBlur: true,
          drawerIcon: ({ activeTintColor }) => (
            <Icon size={30} color={activeTintColor} name="car" />
          ),
        }}
      />
      <Drawer.Screen
        name="Policy"
        component={Policy}
        options={{
          drawerLabel: 'Chính sách và điều khoản',
          unmountOnBlur: true,

          drawerIcon: ({ activeTintColor }) => (
            <Icon size={30} color={activeTintColor} name="contacts" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function N_Drawer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
