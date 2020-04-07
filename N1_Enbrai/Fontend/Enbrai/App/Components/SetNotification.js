import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Switch, AsyncStorage,Alert, BackHandler, StatusBar} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import {Icon, Slider} from 'react-native-elements'
import firebase,{Notification} from 'react-native-firebase'

const SetNotification = props => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [time, setTime] = useState();
  const maxheight = Dimensions.get('window').height
  useEffect(()=>{
    const param = props.navigation.getParam('time');
    console.log(param)
    setTime(parseInt(param))
    checkPermission();
    setIsEnabled(true);
    return()=>{}
  },[props.navigation.getParam('time')])
  const backAction = ()=>{  
      
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  },[]);
  const checkPermission = async() => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    }
    else {
      requestPermission();
    }
  }
  
  const requestPermission = async()=> {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('quyền bị từ chối');
    }
  }
  const getToken = async()=> {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log('token = ', fcmToken);
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }
  const createNotificationListeners= async()=> {

    //Tạo channel
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('My apps test channel');
      console.log('my chanel id = ', channel);
    firebase.notifications().android.createChannel(channel);

    //Vietnamese explain: khi đang ở foreground => show alert khi có noti
    const notificationListener = firebase.notifications().onNotification((noti) => {
      const { title, body } = noti;
      Alert.alert(title, body);
    });
  }

  const toggleSwitch = () =>{
    setIsEnabled(!isEnabled);
  } 

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
     <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
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
            thumbTintColor = {isEnabled ? "#FFB74D" : "#E0E0E0"}
            minimumTrackTintColor={isEnabled ? "#FFB74D" : "#E0E0E0"}
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
        onPress = { async()=>{
            try{
              await AsyncStorage.setItem('Time', time.toString())
            }catch (error){console.log(error)}
            props.navigation.navigate('HomeScreen')
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
export default withNavigation(SetNotification);
