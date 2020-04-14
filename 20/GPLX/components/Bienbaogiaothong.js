import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Bienbao extends Component{
    state= {
        names: [
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm đi xe đạp','describe':'Để báo đường cấm xe đạp đi qua','id':1},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm xe xúc vật kéo','describe':'Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua','id':2},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Hạn chế trọng lượng xe','describe':'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định, có trọng lượng toàn bộ vượt quá trị số ghi trên biển đi qua','id':3},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Hạn chế chiều cao','describe':'Cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định có chiều cao (tính đến điểm cao nhất kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua','id':4},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Hạn chế chiều ngang','describe':'Cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua.','id':5},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Hạn chế chiều dài ô tô','describe':'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định, có độ dài toàn bộ kể cả xe và hàng lớn hơn trị số ghi trên biển đi qua.','id':6},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm rẽ trái','describe':'Cấm rẽ trái','id':7},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm rẽ phải','describe':'Cấm rẽ phải','id':8},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm quay xe','describe':'Cấm quay xe','id':9},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm ô tô quay đầu','Cấm ô tô quay đầu xe':'hello','id':10},
            {'image': require('./resources/bienbaocam/camxedap.jpg'),'name':'Cấm vượt','describe':'Cấm vượt','id':11}
        ]
    }
    render(){
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {{flexDirection:'row',flex:1,borderWidth:0.5}}>
                                <View style={{flex:3}}>
                                    <Image source={item.image} style={{width:100,height:100}}></Image>
                                </View>
                                <View style={{flex:7,paddingLeft:20}}>
                                    <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
                                    <Text style={{color:'gray'}}>{item.describe}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}