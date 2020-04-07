/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ExamScreen from '../togglescreen/ExamScreen';
import FavorityScreen from '../togglescreen/FavorityScreen';
import SearchScreen from '../togglescreen/SearchScreen';
import StructureScreen from '../togglescreen/StructureScreen';
import StructureWordScreen from '../togglescreen/StructureWordScreen';
import PronounceScreen from '../togglescreen/PronounceScreen';
import GrammarScreen from '../togglescreen/GrammarScreen';
import MoreAppScreen from '../togglescreen/MoreAppScreen';
import SettingScreen from '../togglescreen/SettingScreen';
import ShareScreen from '../togglescreen/ShareScreen';
import RateScreen from '../togglescreen/RateScreen';
import FeedbackScreen from '../togglescreen/FeedbackScreen';
import HomeScreen from '../screens/homescreen';
import DrawerComponent from './drawercomponent';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

export default function Toggle() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      keyboardDismissMode="none"
      drawerContent={props => <DrawerComponent {...props} />}
      drawerStyle={{
        marginTop: 50,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Giao tiếp',
          drawerIcon: () => <FontAweSome5 name="comment-alt" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Tìm kiếm',
          drawerIcon: () => <FontAweSome5 name="search" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Favority"
        component={FavorityScreen}
        options={{
          title: 'Yêu thích',
          drawerIcon: () => <FontAweSome5 name="heart" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Exam"
        component={ExamScreen}
        options={{
          title: 'Kiểm tra',
          drawerIcon: () => <FontAweSome5 name="check" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Structure"
        component={StructureScreen}
        options={{
          title: 'Cấu trúc câu',
          drawerIcon: () => <FontAweSome5 name="network-wired" size={16} />,
        }}
      />
      <Drawer.Screen
        name="StructureWord"
        component={StructureWordScreen}
        options={{
          title: 'Cấu trúc từ',
          drawerIcon: () => <FontAweSome5 name="file-word" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Pronounce"
        component={PronounceScreen}
        options={{
          title: 'Cách phát âm',
          drawerIcon: () => <FontAweSome5 name="volume-up" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Grammar"
        component={GrammarScreen}
        options={{
          title: 'Ngữ pháp khác',
          drawerIcon: () => <FontAweSome5 name="plus" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Share"
        component={ShareScreen}
        options={{
          title: 'Chia sẻ',
          drawerIcon: () => <FontAweSome5 name="share-alt" size={16} />,
        }}
      />
      <Drawer.Screen
        name="MoreApp"
        component={MoreAppScreen}
        options={{
          title: 'Ứng dụng của Awabe',
          drawerIcon: () => <FontAweSome5 name="headphones-alt" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Rate"
        component={RateScreen}
        options={{
          title: 'Ủng hộ 5*',
          drawerIcon: () => <FontAweSome5 name="star" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          title: 'Góp ý',
          drawerIcon: () => <FontAweSome5 name="telegram-plane" size={16} />,
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Cài đặt',
          drawerIcon: () => <FontAweSome5 name="flag" size={16} />,
        }}
      />
    </Drawer.Navigator>
  );
}
