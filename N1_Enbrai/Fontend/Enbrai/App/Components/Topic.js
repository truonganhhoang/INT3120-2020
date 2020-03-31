import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import {Icon,CheckBox, ButtonGroup} from 'react-native-elements'
import {TOPIC} from '../data/data'
const Topic = props => {
  const [index, setIndex] = useState(0);
  const [dataTopic, setDataTopic] = useState([]);
  const buttons = ['TẤT CẢ CHỦ ĐỀ', 'CÁC CHỦ ĐỀ ĐÃ CHỌN']
  useEffect(()=>{
    setDataTopic(TOPIC)
  },[])
  const updateIndex =(index)=> {
    setIndex(index)
    if(index==0){
      setDataTopic(TOPIC)
    }else{
      var newdata = TOPIC.filter(item=>item.checked == true);
      setDataTopic(newdata)
    }
  }
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
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
              return(
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                    size= {18}
                    checked={item.checked}
                    onPress = {()=>{
                      var ind = dataTopic.findIndex(items => items.id == item.id);
                     
                      var newdata = [...dataTopic];
                      var temp = newdata[ind];
                      temp.checked = !item.checked
                      newdata.slice(ind,1,{...temp});
                      if(index==1){
                        newdata.splice(ind,1)
                      }
                      console.log()
                      setDataTopic(newdata)
                    }}
                />
                <Text style={{fontSize: 16}}>{item.name}</Text>
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
        <TouchableOpacity style={{padding: 5, marginRight: 20}} onPress = {()=>{props.navigation.goBack()}}>
          <Text style={{fontSize: 18, color: '#fff'}}>Hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{ padding: 8, backgroundColor: '#FFB74D', flexDirection: 'row', borderRadius: 5}}
        onPress = {()=>{props.navigation.navigate('HomeScreen')}}>
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
export default withNavigation(Topic);
