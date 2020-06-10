import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,CheckBox} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import cau1 from '../assets/372.jpg';
import cau2 from '../assets/379.jpg';
import cau3 from '../assets/428.jpg';

export default () => {
  return <ScrollableTabView
   
    tabBarTextStyle={{ fontSize: 17, fontWeight: 'bold',width:150}}
    tabBarPosition="bottom"
    tabBarBackgroundColor="#04B431"
    
    tabBarActiveTextColor='#fff'
    
    tabBarInactiveTextColor='#fff'
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <View >
            <View style={{alignItems:"center"}}>
              <Text style={{paddingTop:15,fontSize:19,fontWeight: 'bold',color:'#0101DF'}}>Câu 1</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2,alignItems:"center"}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold',paddingTop:5,}}>các xe đi theo mũi tên xe nào vi phạm quy tắc giao thông ?</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
            <Image   source={cau1}/>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Xe khách, xe tải , xe moto</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1. Xe tải, xe con, Xe moto</Text>
                  <Text style={{color:"#B40431",fontSize:17}}>2. Xe khách, xe con, xe moto</Text>
                  
                </View>
            </View>
           
   
    </View>
    <View >
            <View style={{alignItems:"center"}}>
              <Text style={{paddingTop:15,fontSize:19,fontWeight: 'bold',color:'#0101DF'}}>Câu 2</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2,alignItems:"center"}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold',paddingTop:5,}}>Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
            <Image   source={cau2}/>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Không đúng</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1.Đúng</Text>
                  
                </View>
            </View>
           
   
    </View>
    <View >
            <View style={{alignItems:"center"}}>
              <Text style={{paddingTop:15,fontSize:19,fontWeight: 'bold',color:'#0101DF'}}>Câu 3</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2,alignItems:"center"}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold',paddingTop:5,}}>Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
            <Image   source={cau3}/>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Xe moto</Text>
                  <Text style={{color:"#04B431",fontSize:17}}>2. Xe ô tô con</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1. Không xe nào vi phạm</Text>
                </View>
            </View>
           
   
    </View>
   
         
  </ScrollableTabView>;
}