import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,CheckBox} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

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
    <View tabLabel='Câu 1'>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold'}}>Khái niệm đường bộ được hiểu như thế nào là đúng</Text>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Đường bộ , cầu đường bộ</Text>
                  <Text style={{color:"#04B431",fontSize:17}}>2. Hầm đường bộ, bấn phà đường bộ</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1.Đường cầu đường bộ hầm đường bộ và các công trình khác </Text>
                  
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Giải thích đáp án</Text>
                <View style={{marginLeft:15,marginBottom:10,marginRight:15}}>
                  <Text style={{fontSize:17,borderRadius:4,backgroundColor:"#81F781",padding:15}}>bỏi vì các công trình khác ở đây chúng ta không biết nó là công trình gì nên loại đáp án này </Text>
                  
                </View>
            </View> 
   
    </View>
    <View tabLabel='Câu 2'>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold'}}>Khái niệm đường bộ được hiểu như thế nào là đúng</Text>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Đường bộ , cầu đường bộ</Text>
                  <Text style={{color:"#04B431",fontSize:17}}>2. Hầm đường bộ, bấn phà đường bộ</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1.Đường cầu đường bộ hầm đường bộ và các công trình khác </Text>
                  
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Giải thích đáp án</Text>
                <View style={{marginLeft:15,marginBottom:10,marginRight:15}}>
                  <Text style={{fontSize:17,borderRadius:4,backgroundColor:"#81F781",padding:15}}>bỏi vì các công trình khác ở đây chúng ta không biết nó là công trình gì nên loại đáp án này </Text>
                  
                </View>
            </View> 
   
    </View>
    <View tabLabel='Câu 3'>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold'}}>Khái niệm đường bộ được hiểu như thế nào là đúng</Text>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Đường bộ , cầu đường bộ</Text>
                  <Text style={{color:"#04B431",fontSize:17}}>2. Hầm đường bộ, bấn phà đường bộ</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1.Đường cầu đường bộ hầm đường bộ và các công trình khác </Text>
                  
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Giải thích đáp án</Text>
                <View style={{marginLeft:15,marginBottom:10,marginRight:15}}>
                  <Text style={{fontSize:17,borderRadius:4,backgroundColor:"#81F781",padding:15}}>bỏi vì các công trình khác ở đây chúng ta không biết nó là công trình gì nên loại đáp án này </Text>
                  
                </View>
            </View> 
   
    </View>
       
    <View tabLabel='Câu 4'>
            <View  style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:17,fontWeight: 'bold'}}>Khái niệm đường bộ được hiểu như thế nào là đúng</Text>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án đúng</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#04B431",fontSize:17}}>1. Đường bộ , cầu đường bộ</Text>
                  <Text style={{color:"#04B431",fontSize:17}}>2. Hầm đường bộ, bấn phà đường bộ</Text>
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Đáp án sai</Text>
                <View style={{marginLeft:10,marginBottom:10}}>
                  <Text style={{color:"#B40431",fontSize:17}}>1.Đường cầu đường bộ hầm đường bộ và các công trình khác </Text>
                  
                </View>
            </View>
            <View style={{borderColor:"#A4A4A4",borderBottomWidth:2}}>
                <Text  style={{padding:15,fontSize:20,fontWeight: 'bold',color:'#0404B4'}}>Giải thích đáp án</Text>
                <View style={{marginLeft:15,marginBottom:10,marginRight:15}}>
                  <Text style={{fontSize:17,borderRadius:4,backgroundColor:"#81F781",padding:15}}>bỏi vì các công trình khác ở đây chúng ta không biết nó là công trình gì nên loại đáp án này </Text>
                  
                </View>
            </View> 
   
    </View>
         
  </ScrollableTabView>;
}