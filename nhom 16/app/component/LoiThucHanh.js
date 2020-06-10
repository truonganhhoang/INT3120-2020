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
               <Greeting name="1. lỗi chạm vạch: lỗi này thường khá phổ biến mà các bạn rất hay gặp phải khi thi thực hành, thường thì phần thì này các 
               bạn hay chạm vạch nhất là lúc vào và ra khỏi vòng số 8. Một số lưu ý cho các bạn khi thi để tránh gặp phải lỗi này là khi vào bạn nên đi sát mép
               bên trái và trong lúc quyện xe nên hạn chế để ngoăt đầu xe có nghĩa bạn nên để đầu xe càng tahwngr càng tốt "/>
               <Greeting name="2. Lỗi chống chân: Lôic này hầu như các bạn gặp phải trên đoạn đường sóc gần như các bạn cho ga ăn quá ít dẫn đến xe yếu 
               nên phải chống chân . với lỗi này thì các bạn nên học đi xe trước sao cho thành thục và làm chủ tay ga một cách dễ đi nhất"/>
               <Greeting name="3. Chết máy lúc dnag thi: gần như các bạn hay gặp lỗi này thường là hững bạn tay lái kém run tay khi thi nên cho ga không đủ 
                dẫn đến chết máy . lười khuyên của mình cũng giống phần 2 là các bạn nên tập xe thành thạo để tránh gặp looxi này"/>
               <Greeting name="4. Lỗi chống chân : đây cũng là một trong những lỗi khá phổ biên đối với các bạn yếu tay lại các bạn thường run tay dẫn đến nghiêng xe và phải chống chân
               , để tránh lỗi này thì các bạn cũng không còn cách nào khác là phải học đi xe hành thạo trước khi thi."/>

            </ScrollView>
        );
    }
    
   }
   