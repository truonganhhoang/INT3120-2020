import React, {useEffect, useState} from 'react';
import {View, AsyncStorage, StatusBar, BackHandler} from 'react-native';
import {
  StackActions,
  NavigationActions,
  withNavigation,
} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import firebase, {Notification} from 'react-native-firebase';

console.disableYellowBox = true;
const Loading = props => {
  const [token, setToken] = useState('');
  useEffect(() => {
    SplashScreen.hide();
    const fetchData = async () => {
      var once = await AsyncStorage.getItem('once');
      if (once) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({routeName: 'AppStackNavigation'}),
          ],
        });
        props.navigation.dispatch(resetAction);
        //props.navigation.navigate('AppStackNavigation')
      } else {
        checkPermission();
        createNotification();
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({routeName: 'OnceSetNumberWordScreen'}),
          ],
        });
        props.navigation.dispatch(resetAction);
        //props.navigation.navigate('OnceSetNumberWordScreen')
      }
    };
    fetchData();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);
  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('quyền bị từ chối');
    }
  };
  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log('token = ', fcmToken);
      if (fcmToken) {
        // user has a device token
        setToken(fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  };
  const createNotification = async () => {
    //Tạo channel
    const channel = new firebase.notifications.Android.Channel(
      'Enbrai-channel',
      'Enbrai Channel',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('My apps test channel');
    console.log('my chanel id = ', channel.channelId);
    firebase.notifications().android.createChannel(channel);
    firebase.notifications().onNotificationDisplayed(()=>{})
    const notification = new firebase.notifications.Notification()
      .setNotificationId('notificationId')
      .setTitle('Enbrai')
      .setBody('Cùng nhau học tập nào');
    firebase.notifications().onNotification(()=>{
      notification
      .android.setChannelId('channelId')
      .android.setSmallIcon('ic_launcher');
      firebase.notifications().displayNotification(notification)
    })
    const date = new Date();
        date.setMinutes(date.getMinutes() + 1);

        firebase.notifications().scheduleNotification(notification, {
            fireDate: date.getTime(), repeatInterval: 'day'
        })
    firebase.notifications().onNotificationOpened(()=>{})
  };
  const backAction = () => {
    BackHandler.exitApp();
  };
  return <View />;
};

export default Loading;
