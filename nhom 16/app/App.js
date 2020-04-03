import * as React from 'react';
import { View, Text,StyleSheet,ScrollView,Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrangChu from './component/TrangChu';
import LiThuyet from './component/LiThuyet';
import ThiSatHach from './component/ThiSatHach';
import BienBao from './component/bienbao';
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

import biencam from './bienbao/biencam';
import biennguyhiem from './bienbao/biennguyhiem';
import bienhieulenh from './bienbao/bienhieulenh';
import bienchidan from './bienbao/bienchidan';
import bienbaophu from './bienbao/bienbaophu';
import vachkeduong from './bienbao/vachkeduong';


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
              onPress={() => props.navigation.navigate('Lithuyet')}
              icon={() => <Icon  name='book' style={{fontSize:35,color:"#A4A4A4"}}/>}
            />
          
            <DrawerItem
              label='các biển báo đường bộ'
              onPress={() => props.navigation.navigate('Lithuyet')}
              icon={() => <Icon  name='caretright' style={{fontSize:35}}/>}
            />
            <DrawerItem
              label='Mẹo thi kết quả cao'
              onPress={() => props.navigation.navigate('Lithuyet')}
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


function mytab({navigate}){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Biển báo cấm" component={biencam}/>
      <Tab.Screen name="Biển báo nguy hiểm " component={biennguyhiem}/>
      <Tab.Screen name="Biển báo hiệu lệnh" component={bienhieulenh}/>
      <Tab.Screen name="Biển báo chỉ đường" component={bienchidan}/>
      <Tab.Screen name="Biển báo phụ" component={bienbaophu}/>
      <Tab.Screen name="vạch kẻ đường" component={vachkeduong}/>
    </Tab.Navigator>
  );
}
function tab({navigate}) {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Li Thuyet" component={MeoThi} />
        <Tab.Screen name="Thực Hành" component={thuHanh} />
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
        <Stack.Screen name="Bien bao" component={mytab} />
        <Stack.Screen name="Mẹo thi kết quả cao" component={tab} />
        <Stack.Screen name="Tra cứu luật nhanh" component={TraCuuLuat} />
        <Stack.Screen name="Câu hỏi hay sai" component={CauHaySai} />
        <Stack.Screen name="de1" component={de1} />
        
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



