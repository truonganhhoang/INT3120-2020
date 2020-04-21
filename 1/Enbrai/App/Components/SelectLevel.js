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
import {connectSQLite,requestGET} from './ConnectData';
import {EmptyFlatlist} from './EmtyFlatList';
import firebase from 'react-native-firebase';
import * as Animatable from 'react-native-animatable';
const SelectLevel = props => {
  const [dataResult, setDataResult] = useState([]);
  const [data, setData] = useState();
  const [partId, setPartId] = useState();
  useEffect(() => {
    const fetchData = async()=>{
     
     
      // const result = await requestGET(id);
      // setData(result)
      //console.log(result)
    }
    const fetchDataResult =() => {
      var partId = props.navigation.getParam('id');
      setPartId(partId);
      firebase.database().ref('DataResult').child('Part').child(`${partId}`).child('levels').on('value', (snap)=>{
        var data=[];
          snap.forEach((child)=>{
            data.push(child.val())
          })
          //console.log(data)
          setDataResult(data)
      })
    };
    fetchDataResult();
    fetchData()
    return () => {};
  }, [props]);
  const handlePress = (partId, levelId, index)=>{
    props.navigation.navigate('ExerciseTabScreen', {partId: partId, levelId: levelId, index:index })
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
            Levels
          </Text>
        </View>
      </View>
      <View style={{flex: 9.2}}>
        <View style={{flex:1, height:'100%', marginTop:30}}>
          <FlatList
            data={dataResult}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={EmptyFlatlist}
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
                <TouchableOpacity onPress={()=>{handlePress(partId,item.item.id,item.index+1) }}>
                <View style={{paddingLeft: 20}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: '#424242',
                    }}>
                    Level {item.index+1}
                  </Text>
                  <Text style={{marginTop: 10, fontSize: 16, marginBottom: 10}}>
                    Hoàn thành: {item.item.questCompleteCount}/
                    {item.item.questCount}
                  </Text>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={item.item.questCompleteCount/item.item.questCount}
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
                  onPress={()=>{handlePress(partId,item.item.id,item.index+1) }}
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
export default withNavigation(SelectLevel);
