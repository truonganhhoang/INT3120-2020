import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Test from './Test';
import Learn from './Learn';
import Signs from './Signs';
import Rules from './Rules';
import Tips from './Tips';
import Taplo from './Taplo';
import Hide from './hide';
//Ngăn xếp các màn hình
const Stack = createStackNavigator();

function MyStackHome({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#66bb6a',
        },
      }}
      headerMode="float"
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
              style={{ margin: 0, paddingLeft: 20 }}
              color="white"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerTitleAllowFontScaling: true,
          animationEnabled: true,
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

export default MyStackHome;
