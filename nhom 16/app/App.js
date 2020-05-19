import * as React from 'react';
import { View, Text,StyleSheet,ScrollView,Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrangChu from './component/TrangChu';
import LiThuyet from './component/LiThuyet';
import BienBao from './component/BienBao';
import ThiSatHach from './component/ThiSatHach';
import MeoThi from './component/MeoThi';
import TraCuuLuat from './component/TraCuuLuat';
import de1 from './component/de1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import CauHaySai from './component/CauHaySai';
import anh from './assets/anh.jpg';
import thuHanh from './component/thuHanh';


import xemay from './tracuuluat/xemay';
import oto from './tracuuluat/oto';
import xekeo from './tracuuluat/xekeo';
import xedap from './tracuuluat/xedap';
import dibo from './tracuuluat/dibo';
import bo from './tracuuluat/bo';

import khainiem from './HocLiThuyet/KhaiNiem';
import bienbao from './HocLiThuyet/bienBao';
import sahinh from './HocLiThuyet/sahinh';
import vanhoa from './HocLiThuyet/vanHoa';

import LoiThucHanh from './component/LoiThucHanh';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginTop:-5}}><Image source={anh} style={{height:200}}/></View>
      <View style={{borderBottomColor:"#D8D8D8",borderBottomWidth:4,}}>
           <DrawerItem
              
              label='Trang chủ'
              onPress={() => props.navigation.navigate('Thi thử bằng lái xe a1')}
              icon={() => <Icon  name='home' style={{fontSize:35,color:"#A4A4A4"}} />}
            />
            <DrawerItem
              label='Học lí thuyết'
              onPress={() => props.navigation.navigate('Lithuyet')}
              icon={() => <Icon  name='circle' style={{fontSize:35,color:"#A4A4A4"}}/>}
            />
          <DrawerItem
              style={{marginTop:-3}}
              label='thi sát hạch '
              onPress={() => props.navigation.navigate('Thi Sat Hach')}
              icon={() => <Icon  name='book' style={{fontSize:35,color:"#A4A4A4"}}/>}
            />
          
            <DrawerItem
              label='các biển báo đường bộ'
              onPress={() => props.navigation.navigate('Bien bao')}
              icon={() => <Icon  name='caretright' style={{fontSize:35}}/>}
            />
            <DrawerItem
              label='Mẹo thi kết quả cao'
              onPress={() => props.navigation.navigate('Mẹo thi kết quả cao')}
              icon={() => <Icon  name='balance-scale' style={{fontSize:35}}/>}
            />
            <DrawerItem
              label='Tra cứu luật nhanh'
              onPress={() => props.navigation.navigate('Lithuyet')}
              icon={() => <Icon  name='book' style={{fontSize:35}}/>}
            />
            <DrawerItem
              label='các câu hỏi hay sai'
              onPress={() => props.navigation.navigate('Lithuyet')}
              icon={() => <Icon  name='book' style={{fontSize:35}}/>}
            />
      </View>
      <Text style={{color:"#6E6E6E",marginTop:10,marginLeft:16,fontSize:17,marginBottom:20}}> Giao tiếp</Text>
        <DrawerItem
          label='Đánh giá ứng dụng'
          onPress={() => props.navigation.navigate('Lithuyet')}
          icon={() => <Icon  name='comment-account-outline' style={{fontSize:35}}/>}
        />
        <DrawerItem
          label='Chia sẻ ứng dụng'
          onPress={() => props.navigation.navigate('Lithuyet')}
          icon={() => <Icon  name='share-variant' style={{fontSize:35}}/>}
        />
        <DrawerItem
          label='Gửi email hỗ trợ'
          onPress={() => props.navigation.navigate('Lithuyet')}
          icon={() => <Icon  name='email' style={{fontSize:35}}/>}
        />
        <DrawerItem
          label='Chính sách bảo mật'
          onPress={() => props.navigation.navigate('Lithuyet')}
          icon={() => <Icon  name='contacts' style={{fontSize:35}}/>}
        />
        <DrawerItem
          label='Phiên bản: 1.1.7'

          icon={() => <Icon  name='book' style={{fontSize:35}}/>}
        />
    </DrawerContentScrollView>
  );
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function luattab({navigate}){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'oto') {
          iconName = focused
            ? require('./assets/car.png')
            : require('./assets/carblack.png');
        } 

        // You can return any component that you like here!
        return <Image source={iconName}  style={{width:20,height:20}} resizeMethod="contain" />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="xe máy"  component={xemay}/>
      <Tab.Screen name="oto" component={oto}/>
      <Tab.Screen name="xe keo" component={xekeo}/>
      <Tab.Screen name="người đi bộ" component={xedap}/>
      <Tab.Screen name="gia xúc" component={dibo}/>
      <Tab.Screen name="xe đạp" component={bo}/>

    </Tab.Navigator>
  )
}


function tab({navigate}) {
  return (

      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name ==='Li Thuyet') {
            iconName = focused
              ? require('./assets/car.png')
              : require('./assets/carblack.png');
          } else if (route.name ==='Thực Hành') {
            iconName = focused 
            ? require('./assets/craneblack.png') 
            : require('./assets/crane.png');
          }

          // You can return any component that you like here!
          return <Image source ={iconName} size={{width:20,height:20}} 
           resizeMethod="contain" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#A4A4A4',
        labelStyle: {
          fontSize: 17,
        },
      }}>
        <Tab.Screen name="Li Thuyet" component={MeoThi}  />
        <Tab.Screen name="Thực Hành" component={thuHanh} />
      </Tab.Navigator>
  );
}
function loitab({navigate}) {
  return (

      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name ==='Li Thuyet') {
            iconName = focused
              ? require('./assets/car.png')
              : require('./assets/carblack.png');
          } else if (route.name ==='Thực Hành') {
            iconName = focused 
            ? require('./assets/craneblack.png') 
            : require('./assets/crane.png');
          }

          // You can return any component that you like here!
          return <Image source ={iconName} size={{width:20,height:20}} 
           resizeMethod="contain" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#A4A4A4',
        labelStyle: {
          fontSize: 17,
        },
      }}>
        <Tab.Screen name="Li Thuyet" component={CauHaySai}  />
        <Tab.Screen name="Thực Hành" component={LoiThucHanh} />
      </Tab.Navigator>
  );
}
function Mystack({navigation}) {
  return (
    
      <Stack.Navigator initialRouteName="Thi thử bằng lái xe a1" 
      screenOptions={{ 
        headerTintColor: '#FFFFFF',
          headerStyle:{
            backgroundColor: '#04B431',
            height:100,
          },
      }}
      >
        <Stack.Screen name="Thi thử bằng lái xe a1" component={TrangChu} options={{
          
          headerLeft: () => (
            <Icon name='menu' size={30} style={{left:15}} color='white' 
            onPress={() =>  navigation.openDrawer()}
            />
          ),
        }}/>
        <Stack.Screen name="Lithuyet" component={LiThuyet} />
        <Stack.Screen name="Thi Sat Hach" component={ThiSatHach} />
        <Stack.Screen name="Bien bao" component={BienBao} />
        <Stack.Screen name="Mẹo thi kết quả cao" component={tab} />
        <Stack.Screen name="Tra cứu luật nhanh" component={luattab} />
        <Stack.Screen name="Lỗi thường gặp" component={loitab} />
        <Stack.Screen name="de1" component={de1} />
        <Stack.Screen name="Khái Niệm và quy tắc" component={khainiem} />
        <Stack.Screen name="Hệ thống các biển báo đường bộ" component={bienbao} />
        <Stack.Screen name="Các thế sa hình" component={sahinh} />
        <Stack.Screen name="Văn hóa đạo đức nghề nghiệp " component={vanhoa} />
        
      </Stack.Navigator>
  );
}




function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Mystack} />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}



