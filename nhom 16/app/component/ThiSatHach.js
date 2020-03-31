import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView,Image} from 'react-native';
import book from '../assets/thi.png';
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:"#BDBDBD"}}>
               <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 1</Text>
                </View>
                 <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 2</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 3</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 4</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 5</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 6</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 7</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 8</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 9</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 10</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 11</Text>
                </View>
                <View style={styles.Lythuyet}> 
                    <Image source={book} style={styles.img}/> 
                    <Text style={styles.text}
                    onPress={() =>
                        this.props.navigation.navigate('de1')
                    }>Đề thi thử số 12</Text>
                </View>
                
            </ScrollView>
        );
    }
    
   }
   const styles =StyleSheet.create({
       text:{
        flex:5,
        paddingTop:25,
        paddingLeft:20,
        paddingRight:10,paddingBottom:5,fontSize:20,
        color:"#2E2EFE"
       },
       Lythuyet: {
        borderRadius:4,
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        flexDirection:"row",
        backgroundColor:"#F8E0E6",
       },
       img:{
        flex:1,
        marginLeft:15,
        marginTop:10,
        marginBottom:5,fontSize:17,
        color:"#0101DF"
       }
   })