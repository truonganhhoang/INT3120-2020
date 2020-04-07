import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class TrangChu extends Component{
    render(){
        return(
            <View style={{backgroundColor:"#D8D8D8",flex:1}}>
                <View style={style.icon}
                >
                   <Icon style={style.pad} name='circle' />
                   <Text style={{fontSize:17,flex:4,marginTop:27}} onPress={() =>
                    this.props.navigation.navigate('Khái Niệm và quy tắc')
                } >Khái niệm và quy tắc (75 câu)</Text>
                </View>
                <View style={style.icon}>
                   <Icon style={style.pad} name='circle' />
                   <Text style={{fontSize:17,flex:4,marginTop:27}} onPress={() =>
                    this.props.navigation.navigate('Hệ thống các biển báo đường bộ')
                } >Hệ thống biển báo đường bộ (35 câu)</Text>
                </View>
                <View style={style.icon}>
                   <Icon style={style.pad} name='circle' />
                   <Text style={{fontSize:17,flex:4,marginTop:27}} onPress={() =>
                    this.props.navigation.navigate('Các thế sa hình')
                }>Các thế sa hình (35 câu)</Text>
                </View>
                <View style={style.icon}>
                   <Icon style={style.pad} name='circle' />
                   <Text style={{fontSize:17,flex:4,marginTop:27}} onPress={() =>
                    this.props.navigation.navigate('Văn hóa đạo đức nghề nghiệp ')
                }>Văn hóa đạo đức nghề nghiệp người lái xe (5 câu)</Text>
                </View>
            </View>
        );
    }
    
   }
   const style=StyleSheet.create({
       icon:{
        flexDirection:"row",
        borderRadius:4,
        shadowColor:"#000",
        shadowOpacity:0.3,
        shadowRadius:10,
        marginTop:20,
        marginLeft:10,
        marginRight:10,backgroundColor:"#FFFFFF",
        borderRadius:6,

        
       },
       pad:{
           flex:1,
           paddingTop:15,
           paddingBottom:15,
           paddingLeft:15,
           fontSize:60,
           color:"#04B431",
       },
   })