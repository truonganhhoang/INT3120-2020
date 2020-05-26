import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, ScrollView, AsyncStorage, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import {Icon,CheckBox, ButtonGroup} from 'react-native-elements'
import SQLite from 'react-native-sqlite-storage'
import {TOPIC} from '../data/data'

const Topic = props => {
  const [index, setIndex] = useState(0);
  const [dataTopic, setDataTopic] = useState([]);
  const [dataTopic1, setDataTopic1] = useState([]);
  const [check, setCheck] = useState([]);
  const buttons = ['TẤT CẢ CHỦ ĐỀ', 'CÁC CHỦ ĐỀ ĐÃ CHỌN']
  useEffect(()=>{
    const fetchData =async ()=>{
      const param = props.navigation.getParam('topic');
      setDataTopic(param)
      setDataTopic1(param)
    }
    fetchData()
    return()=>{}
  },[props.navigation.getParam('topic')])
  const updateIndex = async(index)=> {
    setIndex(index)
    if(index==0){
      setDataTopic(dataTopic1)
    }else{
      var newdata = dataTopic.filter(item=>item.checked == true);
      setDataTopic(newdata)
    }
  }
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
     <StatusBar backgroundColor='#0288D1' barStyle='light-content'></StatusBar>
      <View style={{flex: 9}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{fontSize: 18, color: '#0288D1'}}>Lựa chọn các chủ đề bạn yêu thích</Text>
        </View>
        <View style = {{alignItems: 'center', marginTop: 10}}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={index}
          buttons={buttons}
          containerStyle={{height: 40,borderRadius: 10,width: '70%'}}
          textStyle = {{fontSize: 12, padding: 5}}
        />
        </View>
        <ScrollView style={{marginTop: 10}}>
          {dataTopic.map((item,key) =>{
              key = item._id;
              return(
                <View style ={{flexDirection: 'row', alignItems: 'center', marginLeft:15}}>
                <CheckBox
                    size= {20}
                    checked={item.checked}
                    checkedColor= '#FFB74D'
                    containerStyle = {{padding:0}}
                    onPress = {()=>{
                      
                      var ind = dataTopic.findIndex(items => items._id == key);
                      var ind1 = dataTopic1.findIndex(items => items._id == key);
                      var newdata = [...dataTopic];
                      var newdata1 = [...dataTopic1];
                      var temp = newdata[ind];
                      temp.checked = Boolean(!item.checked)
                      newdata.slice(ind,1,{...temp});
                      newdata1.slice(ind1,1,{...temp});
                      if(index==1){
                        newdata.splice(ind,1)
                      }
                      setDataTopic(newdata)
                      setDataTopic1(newdata1)
                    }}
                />
                <View>
                  <Text style={{fontSize: 16, color: '#424242'}}>{item.translations.vi}</Text>
                </View>
                </View>
              )
          })}
        </ScrollView>
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: '#0592D2',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{marginRight: 20}} onPress = {()=>{props.navigation.goBack()}}>
          <Text style={{fontSize: 18, color: '#fff'}}>Hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{ padding: 8, backgroundColor: '#FFB74D', flexDirection: 'row', borderRadius: 5}}
        disabled = {dataTopic.length!=0?false:true}
        onPress = {async()=>{
          try{
            await AsyncStorage.setItem('Topic',JSON.stringify(dataTopic1));
            props.navigation.navigate('HomeScreen')
          }
          catch (error){
            console.log(error)
          }
          }}>
          <Icon
            name = 'check'
            size = {25}
            color= '#fff'
            containerStyle = {{justifyContent: 'center'}}
          />
          <Text style={{fontSize: 18, color: '#fff'}}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default (Topic);
