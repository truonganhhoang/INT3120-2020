import React, {Component} from 'react'
import { View, Text, StyleSheet, StatusBar, Image, FlatList, Alert, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { TouchableOpacity } from 'react-native';

class List extends Component{
  render() {
    return (
      
    <View style={{}}>
      <View style={styles.loaixe}>
        <Text style={{fontSize:15}}>{this.props.name}</Text>
        <Text style={{marginLeft:31,fontSize:15,color:'#A4A4A4'}}>{this.props.tai}</Text>
      </View>
    </View>
      
    );
  }
}

export default class Home extends Component  {
  constructor(props) {
    super(props);
  
    this.state = {
      GridListItems: [
        {icon:"", key: "THI SÁT HẠNH" },
        {icon:"", key: "HỌC LÝ THUYẾT" },
        {icon:"", key: "BIỂN BÁO ĐƯỜNG BỘ" },
        {icon:"", key: "MẸO THI KẾT QUẢ CAO" },
        {icon:"", key: "TRA CỨU LUẬT (NĐ 100/2019/" },
        {icon:"", key: "CÁC CÂU HAY SAI" },
      ]
    };
  }
  GetGridViewItem(item) {
    Alert.alert(item);
  }
     render(){
         return (
             <View style={styles.container}>
               <StatusBar
                  barStyle = "light-content"
                  hidden = {false}
                  backgroundColor = "#4cb050"
                  translucent = {false}
               />
               <View style={styles.Header}>
                 <Icon name='ios-menu' size={40} color='white' onPress={() => this.props.navigation.openDrawer()} />
                 <Text style={styles.textHeader}>Ôn thi giấy phép lái xe</Text>
                 {/* <Icon name='ios-finger-print' size={40} color='white'/>  Test icon*/} 
               </View>

               <View style={{backgroundColor:'#31edd1', flex:3.5}}>
                 <Image source={require('../image/img1.jpg')} style={{width:'100%', height: '100%', resizeMode:'cover'}}/>
               </View>

               <View style={styles.list}>
                <FlatList
                    data={ this.state.GridListItems }
                    renderItem={ ({item}) =>
                      <View style={styles.GridViewContainer}>
                        <Image />
                        <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                      </View> }
                    numColumns={3}
                />
              </View>
              <View style={{flex:3}}>
                <Image style={{width:'100%', height: '100%', resizeMode:'cover'}} source={require('../image/img2.jpg')}/>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.iconButton}>+</Text>
                </TouchableOpacity>
              </View>
              
            </View>
           );
     }
}
 const styles = StyleSheet.create({
   container:{
     flex: 1,
   },
   Header:{
     flex:1,
     backgroundColor: '#66bb6a',
     flexDirection: 'row',
     height: '10%',
     alignItems: 'center',
     paddingHorizontal: 15,
   },
   textHeader:{
     left:20,
     fontSize: 22,
     color: 'white',
   },
   list: {
    flex: 4.5,
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 10,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   flex: 1.5,
   justifyContent: 'center',
   alignItems: 'center',
   height: 120,
   borderWidth:0.5,
   borderColor:'#9d9d9d',
  },
  GridViewTextLayout: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black', 
    padding: 10,
  },
  addButton:{
    position:'absolute',
    zIndex: 11,
    right: 30,
    bottom: 30,
    backgroundColor: '#66bb6a',
    height: 70,
    width:70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  iconButton:{
    color: '#fff',
    fontSize: 24,
  }
 })
