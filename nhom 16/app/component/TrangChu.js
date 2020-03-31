import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {lithuyet} from './LiThuyet';
import { render } from 'react-dom' ;
import book from '../assets/thi.png';
import sach from '../assets/sach.png';
import law from '../assets/law.png';
import warning from '../assets/ale.png';
import wisdom from '../assets/AI.png';
import test from '../assets/exam.png';
export default class TrangChu extends Component{
    render(){
        return(
            <View>  
                <View style={{backgroundColor:"#BDBDBD"}}>
                    <View style={{flexDirection:"row",height:200,marginTop:45,}}>
                        <View style={styles.style}>
                            <Image style={styles.anh}  source={sach}/>
                            
                            <Text style={styles.text}
                            onPress={() =>
                                this.props.navigation.navigate('Lithuyet')
                            }
                            >Học lí thuyết</Text>
    
                        </View>
                        <View style={styles.style}>
                            <Image  style={styles.anh} source={book}/>
                            <Text style={styles.text}
                            onPress={() =>
                                this.props.navigation.navigate('Thi Sat Hach')
                            }
                            >Thi sát hạch</Text>
                        </View>
                        
                        
                    </View>
                    <View style={{flexDirection:"row",height:200,marginTop:20,}}>
                        <View  style={styles.style}>
                            <Image  style={styles.anh} source={warning}/>
                            <Text style={styles.text}
                            onPress={() =>
                                this.props.navigation.navigate('Bien bao')
                            }
                            >Biển báo</Text>
                        </View>
                        <View  style={styles.style}>
                            <Image  style={styles.anh} source={wisdom}/>
                            <Text style={styles.text}
                            onPress={() =>
                                this.props.navigation.navigate('Mẹo thi kết quả cao')
                            }
                            >mẹo thi kết quả cao</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",height:200,marginTop:20,}}>
                    <View  style={styles.style}>
                            <Image  style={styles.anh} source={law}/>
                            <Text style={styles.text}
                            onPress={() =>
                                this.props.navigation.navigate('Tra cứu luật nhanh')
                            }
                            > tra cứu luật</Text>
                    </View>
                        <View  style={styles.style}>
                            <Image  style={styles.anh} source={test}/>
                            <Text style={styles.text}
                            onPress={() =>
                                this.props.navigation.navigate('Câu hỏi hay sai')
                            }
                            >câu hỏi hay sai</Text>
                        </View>
                    </View>             
                </View>
                <View style={{backgroundColor:"#BDBDBD",height:70}}></View>
               
            </View>
        );
    }
    
   }
const styles = StyleSheet.create({
    conten:{
        height:70,
        backgroundColor:'#04B45F',
        justifyContent:'center',
        alignItems:'center',
      },
      style:{
        width:195, backgroundColor:"#FFFFFF",marginLeft:10,marginRight:10,borderRadius:4,
        marginBottom:10,
        alignItems:"center",
      },
      anh:{
        marginTop:15,
       width:130, 
       height:120
      },
      text:{
          marginTop:10,
          fontSize:20,
          backgroundColor:"#FFFFFF",
          color:"#0040FF",

      }
})

