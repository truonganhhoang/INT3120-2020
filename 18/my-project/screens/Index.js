import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Test from './Test';
import Learn from './Learn';
import Tutorial from './Tutorial';
import Skill from './Skill';
import Signs from './Signs';
import Rules from './Rules';
import Tips from './Tips';
import Taplo from './Taplo';
import Policy from './Policy';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Hide from './hide';

function CustomDrawerContent(props) {
  var { width } = Dimensions.get('window');
  return (
    <DrawerContentScrollView {...props}>
      {/* <LinearGradient
        colors={['#66bb6a', '#d4fc79', '#96e6a1', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      >
        <View style={{ alignItems: 'center', flexDirection: 'row', top: 50, marginHorizontal: Dimensions.get("screen").width / 6 }}>
          <Image source={require('../assets/car.png')} />
          <Text style={{ left: 10, color: '#0094D5', fontWeight: 'bold', fontSize: 15 }}>Ôn thi {'\n'}Giấy phép lái xe B1</Text>
        </View>
      </LinearGradient> */}
      <View style={{ flex: 0.4 }}>
        <Image
          source={require('../assets/car.png')}
          style={{ width: 150, height: 150, resizeMode: 'center' }}
        />
      </View>
      <DrawerItem
        label="Học bằng lái xe"
        onPress={() => props.navigation.navigate('Home')}
        icon={() => <Icon size={30} color="#08B62C" name="car" />}
        style={{ backgroundColor: '#CCCCCC' }}
        labelStyle={{ color: '#08B62C' }}
      />
      <DrawerItem
        label="Hướng dẫn sử dụng"
        onPress={() => props.navigation.navigate('Tutorial')}
        icon={() => <Icon size={30} color="gray" name="information-outline" />}
      />
      <DrawerItem
        label="Kỹ năng lái xe"
        onPress={() => props.navigation.navigate('Skill')}
        icon={() => <Icon size={30} color="gray" name="car" />}
      />
      <DrawerItem
        label="Chính sách và điều khoản"
        onPress={() => props.navigation.navigate('Policy')}
        icon={() => <Icon size={30} color="gray" name="contacts" />}
      />
      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#66bb6a',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Ôn thi giấy phép lái xe B1',
          headerLeft: () => (
            <Icon
              name="menu"
              size={30}
              style={{ left: 15 }}
              color="white"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          title: 'Hướng dẫn chi tiết',
        }}
      />
      <Stack.Screen
        name="Skill"
        component={Skill}
        options={{
          title: 'Kỹ năng và kinh nghiệm lái xe',
        }}
      />
      <Stack.Screen
        name="Policy"
        component={Policy}
        options={{
          title: 'chình sách',
        }}
      />

      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          title: 'Thi sát hạnh',
        }}
      />
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={{
          title: 'Học lý thuyết',
        }}
      />
      <Stack.Screen
        name="Signs"
        component={Signs}
        options={{
          title: 'Biển báo đường bộ',
        }}
      />
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{
          title: 'Mẹo thi kết quả cao',
        }}
      />
      <Stack.Screen
        name="Rules"
        component={Rules}
        options={{
          title: 'Tra cứu luật',
        }}
      />
      <Stack.Screen
        name="Taplo"
        component={Taplo}
        options={{
          title: 'Đèn cảnh báo trên taplo Ô tô',
        }}
      />

      <Stack.Screen
        name="Hide"
        component={Hide}
        options={{
          title: 'Khái niệm và quy tắc',
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerStyle={dimensions.width > 900 ? 'permanent' : 'front'}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Screens"
        component={MyStack}
        options={{ gestureEnabled: true }}
      />
      {/* <Drawer.Screen name="Hướng dẫn sử dụng" component={Tutorial} />
      <Drawer.Screen name="Kỹ năng lái xe" component={Skill} /> */}
    </Drawer.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
