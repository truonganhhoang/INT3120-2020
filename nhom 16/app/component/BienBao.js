import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image} from 'react-native';
import biencam from '../bienbao/BienCam';
import BienNguyHiem from '../bienbao/BienNguyHiem';
import BienHieuLenh from '../bienbao/BienHieuLenh';
import BienChiDan from '../bienbao/BienChiDan';
import BienBaoPhu from '../bienbao/BienBaoPhu';
import VachKeDuong from '../bienbao/VachKeDuong';
import BienCam from '../bienbao/BienCam';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default () => {
  return <ScrollableTabView
   
    tabBarTextStyle={{ fontSize: 17, fontWeight: 'bold'}}
    tabBarBackgroundColor='#04B431'
    tabBarActiveTextColor='#0101DF'
    tabBarInactiveTextColor='#fff'
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <View tabLabel='Biển cấm'>
        <View style={{marginTop:7}}>
            <BienCam/>
        </View>
    </View>
    <View tabLabel='Biển báo nguy hiểm'>
        <View style={{marginTop:7}}>
            <BienNguyHiem/>
        </View>
    </View>
    <View tabLabel='Biển báo hiệu lệnh'>
        <View style={{marginTop:7}}>
            <BienHieuLenh/>
        </View>
    </View>
    <View tabLabel='Biển báo chỉ dẫn'>
        <View style={{marginTop:7}}>
            <BienChiDan/>
        </View>
        
    </View>
    <View tabLabel='Biển báo phụ'>
        <View style={{marginTop:7}}>
            <BienBaoPhu/>
        </View>
    </View>
    <View tabLabel='Vạch kẻ đường'>
        <View style={{marginTop:7}}>
            <VachKeDuong/>
        </View>
    </View>
    
  </ScrollableTabView>;
}