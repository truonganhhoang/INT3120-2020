import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,ScrollView} from 'react-native';
import thucHanh from '../assets/thiThucHanh.jpg'
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{marginLeft:10,marginRight:10,marginTop:20}}>  
                <View style={{}}>
                    <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>1. Biết đi xe máy</Text>
                    <Text style={{marginTop:10,fontSize:18}}>Việc phần thực hành trượt nhiều một phần nguyên nhân là do các bạn 
                        chưa biết đi xe máy. Vậy nếu muốn thi đỗ thì đầu tiên là bạn phải biết đi xe máy</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>2. Tập trước vòng số 8 ở nhà</Text>
                    <Text style={{marginTop:10,fontSize:18}}>Phần thi thực hành trượt nhiều nhất là ở phần thi vòng số 8. Do đó, việc bạn đã biết đi thành thạo xe máy mà chưa một lần tập qua vòng số tám thì cũng dễ bị trượt 
                        nên bạn tập qua vòng số tám càng nhiều lần càng tốt.
                    </Text>
                    <View style={{alignItems:"center"}}>
                    <Image source={thucHanh}  style={{marginTop:10}}/>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>3. Hôm đi thi phải đến thật sớm</Text>
                    <Text style={{marginTop:10,fontSize:18}}>tại sao chúng tôi lại khuyên bạn như vậy? Bởi vì xe của bạn thì bạn quen với nó, bạn đi rất ngon lành. Nhnwg xe của sân thì lại khác nhiều đấy
                        nếu bạn không đến sớm để làm quen với nó thì cũng rất dê trượt. hơn nữa buổi thi thì thương rất đông người nếu bạn đến sớm thì sẽ không phải chờ lâu
                        để có thể tập xe.
                    </Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>4. Cách đi để không bị chạm vạch</Text>
                    <Text style={{marginTop:10,fontSize:18}}>Bạn nên đi từ mép ngoài bên trái ,bởi vì thế thì bánh sau mới không bị chạm vạch.khi đi xe bạn nên để xe ở số 3 vì số 4 thì hơi yếu
                        nhưng số 1 số 2 thì sẽ giật mạnh rất khó kiểm soát. Phần đường gồ ghề bạn nên để đi số 3 và đi chậm vừa phải nếu bạn không muốn bay cả 
                        người lẫn xe ra khỏi đường thi
                    </Text>
                </View>
            </ScrollView>

        );
    }
    
   }