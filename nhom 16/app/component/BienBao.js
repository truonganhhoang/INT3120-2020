import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import biencam from '../bienbao/BienCam';
import BienNguyHiem from '../bienbao/BienNguyHiem';
import bienhieulenh from '../bienbao/BienHieuLenh';
import bienchidan from '../bienbao/BienChiDan';
import bienbaophu from '../bienbao/BienBaoPhu';
import vachkeduong from '../bienbao/VachKeDuong';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BienCam from '../bienbao/BienCam';
const Tab = createMaterialTopTabNavigator();
export default class TrangChu extends Component{
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Biển báo cấm"  component={BienCam}/>
                <Tab.Screen name="Biển báo nguy hiểm " component={BienNguyHiem}/>
                <Tab.Screen name="Biển báo hiệu lệnh" component={bienhieulenh}/>
                <Tab.Screen name="Biển báo chỉ đường" component={bienchidan}/>
                <Tab.Screen name="Biển báo phụ" component={bienbaophu}/>
                <Tab.Screen name="vạch kẻ đường" component={vachkeduong}/>
            </Tab.Navigator>
        );
    }
    
   }