import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  StatusBar,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Icon} from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
import {connectSQLite} from './ConnectData';
import firebase from 'react-native-firebase'
import EmptyFlatlist from './EmtyFlatList';
import * as Animatable from 'react-native-animatable';
const SelectSection = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async()=>{
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').on('value', (snap)=>{
          var data1=[];
          var data=[];
            snap.forEach((child)=>{
              var temp = child.val();
              var item ={
                  id: temp.id,
                  levelCompleteCount: temp.levelCompleteCount,
                  levelCount : temp.levelCount,
                  name : temp.name,
              }
              data1.push(item)
            })
            data.push(data1[1],data1[0],data1[2])
            setData(data)
        })
  }
  fetchData()
    return () => {};
  }, []);
  
  const handlePress = (partId)=>{
    props.navigation.navigate('SelectLevelScreen', {id: partId})
  }
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#0592D2" barStyle="light-content" />
      <View
        style={{
          flex: 0.8,
          backgroundColor: '#0592D2',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{marginBottom: 15, marginLeft: 15, flexDirection: 'row'}}>
          <Icon
            name="arrow-back"
            size={25}
            color="#fff"
            containerStyle={{}}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={{marginLeft: 30, fontSize: 20, color: '#fff'}}>
            Các cấp độ từ
          </Text>
        </View>
      </View>
      <View style={{flex: 9.2}}>
        <View style={{flex:1, height:'100%', marginTop:30}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item, index) => (
              <Animatable.View
              style={{
                marginLeft:20,
                  marginRight:20,
                  marginBottom:15,
                  borderRadius: 8,
                  borderColor: '#E0E0E0',
                  paddingTop: 15,
                  marginTop: 10,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 8,
          
                  elevation: 5,
                }}
                animation = 'fadeInRight'
                delay = {item.index*200}
                >
                <TouchableOpacity onPress={()=>{handlePress(item.item.id) }}>
                <View style={{paddingLeft: 20}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: '#424242',
                    }}>
                    {item.item.name}
                  </Text>
                  <Text style={{marginTop: 10, fontSize: 16, marginBottom: 10}}>
                    Hoàn thành: {item.item.levelCompleteCount}/
                    {item.item.levelCount}
                  </Text>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={item.item.levelCompleteCount/item.item.levelCount}
                    style={{transform: [{scaleX: 1.0}, {scaleY: 2.5}],marginRight:20}}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    height: 50,
                    backgroundColor: '#FAFAFA',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius:10,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                  }}
                  onPress={()=>{handlePress(item.item.id)}}
                  >
                  <Text style={{fontSize: 20, color:"#9E9E9E"}}>Bắt đầu</Text>
                </TouchableOpacity>
                
              </TouchableOpacity>
              </Animatable.View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default withNavigation(SelectSection);
