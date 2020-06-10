import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,CheckBox} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import cau1 from '../assets/256.jpg';
import cau2 from '../assets/283.jpg';
import cau3 from '../assets/276.jpg';

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
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold',paddingTop:5,}}>Biển nào cấm người đi bộ ?</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
            <Image   source={cau1}/>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Biển 2</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1. biển 1</Text>
                  <Text style={{color:"#B40431",fontSize:17}}>1. biển 3</Text>
                  
                </View>
            </View>
           
   
    </View>
    <View >
            <View style={{alignItems:"center"}}>
              <Text style={{paddingTop:15,fontSize:19,fontWeight: 'bold',color:'#0101DF'}}>Câu 2</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2,alignItems:"center"}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold',paddingTop:5,}}>Biển nào xe mô to hai bánh được đi vào ?</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
            <Image   source={cau2}/>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Biển 1 và biển 3</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1. biển 1 và biển 2</Text>
                  <Text style={{color:"#B40431",fontSize:17}}>1. biển 3 và biển 2</Text>
                  
                </View>
            </View>
           
   
    </View>
    <View >
            <View style={{alignItems:"center"}}>
              <Text style={{paddingTop:15,fontSize:19,fontWeight: 'bold',color:'#0101DF'}}>Câu 3</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2,alignItems:"center"}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold',paddingTop:5,}}>Biển nào báo hiệu giao nhau với đường không ưu tiên ?</Text>
            </View>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
            <Image   source={cau3}/>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Biển 2</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1. biển 1 </Text>
                  <Text style={{color:"#B40431",fontSize:17}}>1. biển 3 </Text>
                  
                </View>
            </View>
           
   
    </View>
   
         
  </ScrollableTabView>;
}