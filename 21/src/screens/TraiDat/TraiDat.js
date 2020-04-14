import React, { Component } from 'react';
import { View, Text,ImageBackground,TouchableOpacity,SafeAreaView,StyleSheet,ScrollView,Alert } from 'react-native';
import {Button} from 'native-base';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import Cau1 from './Cau1.js';
import Cau2 from './Cau2.js';
const Stack = createStackNavigator();

const navOptionHandler= () => ({
  headerShown: false
})
var listScreen = ["Câu 1", "Câu 2"]

TraiDat = () =>
  <Stack.Navigator>
      <Stack.Screen name="Screen" component={Screen} options={navOptionHandler}/>
      <Stack.Screen name={listScreen[0]} component={Cau1} 
          options={{
            headerTitle: () => (
              <View style={{width: 150}}>
              <TextTicker
                style={{ fontSize: 15 }}
                animationType={'auto'}
                loop
                bounce={false}
                repeatSpacer={25}
                shouldAnimateTreshold={1}
              >
               KHÔNG KHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?
            </TextTicker>
            </View>
            ),
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              width: 150
            },
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
              <Icon2 name="search-minus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon2 name="search-plus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon name="heart-broken" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon1 name="setting" size={20} color={'white'} style={{paddingRight: 15}}/>
              </View>
            ),
          }}
      />
      <Stack.Screen name={listScreen[1]} component={Cau2} 
          options={{
            headerTitle: () => (
              <View style={{width: 150}}>
              <TextTicker
                style={{ fontSize: 15 }}
                animationType={'auto'}
                loop
                bounce={false}
                repeatSpacer={25}
                shouldAnimateTreshold={1}
              >
              TẦNG KHÍ QUYỂN DÀY BAO NHIÊU?
            </TextTicker>
            </View>
            ),
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              width: 150
            },
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
              <Icon2 name="search-minus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon2 name="search-plus" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon name="heart-broken" size={20} color={'white'} style={{paddingRight: 15}}/>
              <Icon1 name="setting" size={20} color={'white'} style={{paddingRight: 15}}/>
              </View>
            ),
          }}
      />
    </Stack.Navigator>

Screen = ({ navigation,route }) => 
  <SafeAreaView>
    
  <ScrollView>
    <ImageBackground
        source={{
             uri:
                'https://1.bp.blogspot.com/-7kizDZo7Q0I/V-vkKgEA1cI/AAAAAAAACdI/WDcWz1jVtpk9dyWgiqks6IMaFMB8j2v9ACLcB/s1600/vuelta.jpg',
            }}
            style={{
                width: '100%', height: 150
            }}
    >
    <View style={styles.stt}>
        <Button rounded transparent onPress={() => navigation.goBack()}
            style={{width: '10%',alignItems: 'center',justifyContent: 'center',margin: 5}}
        >
            <Icon name="keyboard-backspace" size={25} color={'white'}/>
        </Button>
        <Text style={{color: 'white', fontSize: 18, paddingLeft: 5}}>Trái Đất</Text>
    </View>
    </ImageBackground >
        <TouchableOpacity
             onPress={() => navigation.navigate("Câu 1", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>1</Text>
                </View>
                <Text style={styles.textContent}>KHÔNG KHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Câu 2", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>2</Text>
                </View>
                <Text style={styles.textContent}>TẦNG KHÍ QUYỂN DÀY BAO NHIÊU?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>3</Text>
                </View>
                <Text style={styles.textContent}>VÌ SAO TRÊN KHÔNG Ở VÙNG CỰC TRÁI ĐẤT CÓ LỖ THỦNG OZON?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>4</Text>
                </View>
                <Text style={styles.textContent}>VÌ SAO BẦU TRỜI CÓ MÀU XANH LAM??</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>5</Text>
                </View>
                <Text style={styles.textContent}>ẢO ẢNH TRÊN MẶT BIỂN HÌNH THÀNH NHƯ THẾ NÀO?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>6</Text>
                </View>
                <Text style={styles.textContent}>MÂY ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>7</Text>
                </View>
                <Text style={styles.textContent}>VÌ SAO MÂY CÓ MÀU SẮC KHÁC NHAU?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>8</Text>
                </View>
                <Text style={styles.textContent}>Vì sao xuất hiện cầu vồng trên bầu trời?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>9</Text>
                </View>
                <Text style={styles.textContent}>Khí tượng, thời tiết và khí hậu có gì khác nhau?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
              <View style={styles.square}>
                  <Text style={styles.number}>10</Text>
                </View>
                <Text style={styles.textContent}>Trong một ngày không khí lúc nào trong lành nhất</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
     </ScrollView>
    </SafeAreaView>

export default TraiDat;

const styles = StyleSheet.create({
  stt:{
    flexDirection:'row',
        alignItems: 'center',
    width: '80%',
    margin: 10,
  },
  square:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5
  },
  number:{
    fontSize: 20,
    color: 'white', 
  },
  textContent:{
    fontWeight: 'bold',
    marginLeft : 10
  },
  hr: {
  alignItems: 'center',
    borderBottomColor: '#94b8b8',
    borderBottomWidth: 1,
    width: '90%',
    marginLeft: 12
  },
})