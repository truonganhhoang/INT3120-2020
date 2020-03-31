import * as React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrangChu from './component/TrangChu';
import LiThuyet from './component/LiThuyet';
import ThiSatHach from './component/ThiSatHach';
import BienBao from './component/BienBao';
import MeoThi from './component/MeoThi';
import TraCuuLuat from './component/TraCuuLuat';
import de1 from './component/de1';

import CauHaySai from './component/CauHaySai';

//import Menu from './component/Menu';

function Menu({ navigation}){
  return(
    <ScrollView >

        

        <View style={styles.conten}>
          <Text style={{color:'#FFFFFF', fontSize:20,}}  >CHỌN HẠNG BẰNG THI </Text>
        </View>
        
        <View style={{backgroundColor:'#E6E6E6'}}>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng A1</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe máy</Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng A2</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe mô tô hai bánh</Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng A3</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe mô tô 3 bánh, xe lam,...</Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng B1</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe trọng tải dưới 3500kg</Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng B2</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe ô tô chở người đến 9 chỗ</Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng C</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe  ô tô trọng tải trên 3500kg</Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng D</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>ô tô chở người từ 10 đến 30 chỗ </Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng E</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>ô tô chở người trên 30 chỗ </Text>
          </View>
          <View style={styles.loaixe}>
            <Text style={{fontSize:15}}
              onPress={() => navigation.navigate('Chọn mục bằng thi')}
            >Bằng F</Text>
            <Text style={{marginLeft:30,fontSize:15,color:'#A4A4A4'}}>xe điều khiển các loại móc kéo</Text>
          </View>
      </View>
        
            
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  loaixe:{
    backgroundColor:'#FFFFFF',
    flexDirection:"row",
    marginBottom:10,marginLeft:10,marginRight:10,marginTop:15,
    paddingRight:10,paddingLeft:10,paddingTop:19,paddingBottom:19,
    borderRadius:4,
  },
  conten:{
    marginBottom:10,
    height:50,
    backgroundColor:'#04B45F',
    justifyContent:'center',
    alignItems:'center',
    

  }
});

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Menu} />
        <Stack.Screen name="Chọn mục bằng thi" component={TrangChu} />
        <Stack.Screen name="Lithuyet" component={LiThuyet} />
        <Stack.Screen name="Thi Sat Hach" component={ThiSatHach} />
        <Stack.Screen name="Bien bao" component={BienBao} />
        <Stack.Screen name="Mẹo thi kết quả cao" component={MeoThi} />
        <Stack.Screen name="Tra cứu luật nhanh" component={TraCuuLuat} />
        <Stack.Screen name="Câu hỏi hay sai" component={CauHaySai} />
        <Stack.Screen name="de1" component={de1} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
