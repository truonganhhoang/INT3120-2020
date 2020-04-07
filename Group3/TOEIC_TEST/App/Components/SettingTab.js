import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SettingTabStyles'
import {
    View,
    Text,
    Button
} from 'react-native'
import {fcmService} from '../Services/FCMService';

class SettingTab extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fcmService.register(this.onRegister, this.onNotification, 
        this.onOpenNotification)
    }

    onRegister(token) {
        console.log("[NotificationFCM] onRegister: ", token)
    }

    onNotification(notify) {
        console.log("[NotificationFCM] onNotification: ", notify)
        // For Android
        const channelObj = {
        channelId: "SampleChannelID",
        channelName: "SampleChannelName",
        channelDes: "SampleChannelDes"
        }
        const channel = fcmService.buildChannel(channelObj)

        const buildNotify = {
        dataId: notify._notificationId,
        title: notify._title,
        content: notify._body,
        sound: 'default',
        channel: channel,
        data: {},
        colorBgIcon: "#1A243B",
        largeIcon: 'ic_launcher',
        smallIcon: 'ic_launcher',
        vibrate: true
        }

        const notification = fcmService.buildNotification(buildNotify)
        fcmService.displayNotification(notification)

    }

    onOpenNotification(notify) {
        console.log("[NotificationFCM] onOpenNotification: ", notify)
        alert("Open Notification: " + notify._body)
    }

    render() {

        return (
            <>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>CÀI ĐẶT</Text>
                </View>
                <Button
                title="Press me"
                onPress={() => {
                    const channelObj = {
                    channelId: "SampleChannelID",
                    channelName: "SampleChannelName",
                    channelDes: "SampleChannelDes"
                    }
                    const channel = fcmService.buildChannel(channelObj)
                    const buildNotify = {
                    dataId: '1',
                    title: 'this is title',
                    content: 'hello',
                    sound: 'default',
                    channel: channel,
                    data: {},
                    colorBgIcon: "#1A243B",
                    largeIcon: 'ic_launcher',
                    smallIcon: 'ic_launcher',
                    vibrate: true
                    }
                    const notification = fcmService.buildNotification(buildNotify)
                    fcmService.scheduleNotification(notification, 0, 1)
                }}
                />  
            </>
        )
    }
}
export default SettingTab
