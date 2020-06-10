import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
class Greeting extends Component {
    render() {
      return (
        
        <View style={{marginTop:10,marginLeft:20,marginRight:20,backgroundColor:'#FFFFFF',borderRadius:5}}>
        <View style={{marginTop:10,marginLeft:10,marginBottom:10,marginRight:10}}>
            <Text style={{fontSize:17}}>{this.props.name}</Text>
            <Text>{this.props.value}</Text>
        </View>          
    </View>
        
      );
    }
  }
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'#F5ECCE'}}>
               <Greeting name="1. Đọc đề không kĩ dễ dẫn đến việc chọn nhầm đáp án "/>
               <Greeting name="2. Các câu về hình ảnh thì các bạn thường mắc phải vấn đề nhìn khôn kĩ hình dẫn đến việc chọn nhầm"/>
               <Greeting name="3. Các câu hỏi sa hình các bạn thường không để ý kĩ hiểu nhầm đề đễn đến sai sót khi làm"/>
               <Greeting name="4. Các câu lí thuyết dài thường  các bạn không đọc kĩ mà đáp án thường gần giống nhau nân dễ sai sót."/>

            </ScrollView>
        );
    }
    
   }
   