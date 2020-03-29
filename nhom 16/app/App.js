import React, { Component } from 'react';
import { Text, View,StyleSheet, Button} from 'react-native';
import Menu from './component/Menu'


class Greeting extends Component {
  render() {
    return (
      
    <View style={{backgroundColor:'#E6E6E6'}}>
      <View style={styles.loaixe}>
        <Text style={{fontSize:15}}>{this.props.name}</Text>
        <Text style={{marginLeft:31,fontSize:15,color:'#A4A4A4'}}>{this.props.tai}</Text>
      </View>
    </View>
      
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View >

        <View style={{backgroundColor:'#04B486',height:25,}}></View>

        <View style={styles.conten}>
          <Text style={{color:'#FFFFFF', fontSize:15,}}>CHỌN HẠNG BẰNG THI</Text>
        </View>
        
        <View>
          <Greeting name="BẰNG A1" tai="xe máy"/>
          
        </View>
        <Greeting name="BẰNG A2" tai="xe mô tô hai bánh"/>
        <Greeting name="BẰNG A3" tai="xe mô tô 3 bánh, xe lam..."/>
        <Greeting name="BẰNG A4" tai="máy kéo"/>
        <Greeting name="BẰNG B1" tai="ô tô trọng tải dưới 3.500kg"/>
        <Greeting name="BẰNG B2" tai="ô tô chở người đến 9 chỗ"/>
        <Greeting name="BẰNG C" tai="ô tô tải trên 3.500kg"/>
        <Greeting name="BẰNG D" tai="ô tô chở người từ 10-30 chỗ"/>
        <Greeting name="BẰNG E" tai="ô tô chở người trên 30 chỗ"/>
        <Greeting name="BẰNG F" tai="điều khiển các loại kéo móc"/>
            
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loaixe:{
    backgroundColor:'#FFFFFF',
    flexDirection:"row",
    marginBottom:5,marginLeft:10,marginRight:10,marginTop:10,
    paddingRight:10,paddingLeft:10,paddingTop:19,paddingBottom:19,
    borderRadius:4,
  },
  conten:{
    height:50,
    backgroundColor:'#04B45F',
    justifyContent:'center',
    alignItems:'center',
    

  }
});