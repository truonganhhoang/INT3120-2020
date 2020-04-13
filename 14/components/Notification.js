import React from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';

export default class Timer extends React.Component {
  
  state  = {
    notification: {}
  }
  async  onSubmit(e) {
    Keyboard.dismiss();
    const localNotification = {
      title: 'Original Title',
      body: 'And here is the body!',
      data: { data: `goes here ${new Date().getTime()}` },
      ios: {sound: true, _displayInForeground: true}
    };

    const schedulingOptions = {
      repeat: "minute",
      time: (new Date()).getTime() + Number(e.nativeEvent.text)
    }

    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    const noti = await Notifications.scheduleLocalNotificationAsync(
        localNotification, schedulingOptions
    );
    console.log(noti);
  }
 
  cancelNotification(){
    Notifications.cancelAllScheduledNotificationsAsync();
    console.log(`cancel all notifications`)
  }
    registerForPushNotificationsAsync = async () => {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        return false;
      }
      return true;
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TextInput
                    onSubmitEditing={this.onSubmit}
                    placeholder={'time in ms'}
                />
                <Button title="cancel" onPress={this.cancelNotification}/>
            </View>
        );
    }
};