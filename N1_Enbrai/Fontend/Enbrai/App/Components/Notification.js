import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Switch} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import {Icon, Slider} from 'react-native-elements'
const Notification = props => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [time, setTime] = useState(20);
  const maxheight = Dimensions.get('window').height

  useEffect(()=>{
    setIsEnabled(true)
  },[])
  const toggleSwitch = () =>{
    setIsEnabled(!isEnabled);
  } 
 
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 9}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{fontSize: 18, color: '#0288D1'}}>Nhắc nhở học tập hàng ngày</Text>
        </View>
        <View style={{marginTop: maxheight*0.08, marginLeft: maxheight*0.05}}>
          <Text  style={{fontSize: 16}}>Bật lời nhắc nhở</Text>
          <View style={{marginTop: maxheight*0.02, marginLeft: maxheight*0.02, justifyContent: 'center', alignItems: 'flex-start'}}>
              <Switch
              trackColor={{ false: "#767577", true: "#FFE0B2" }}
              thumbColor={isEnabled ? "#FFB74D" : "#E0E0E0"}
              onValueChange={toggleSwitch}
              value={isEnabled}
              />
          </View>
        </View>
        <View style={{marginTop: maxheight*0.05, marginLeft: maxheight*0.05}}>
          <Text  style={{fontSize: 16}}>Chọn thời gian phù hợp</Text>
          <View style={{marginTop: maxheight*0.02, marginLeft: maxheight*0.02,marginRight: maxheight*0.05}}>
          <Slider
            value={time}
            disabled = {!isEnabled}
            step = {1}
            onValueChange={value => setTime(value)}
            minimumValue = {1}
            maximumValue = {23}
            thumbTintColor = "#FFB74D"
            minimumTrackTintColor="#FFB74D"
            maximumTrackTintColor="#E0E0E0"
          />
          </View>
        </View>
        <View style = {{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text  style={{fontSize: 16}}>{time}:00</Text>
          </View>
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
export default withNavigation(Notification);
