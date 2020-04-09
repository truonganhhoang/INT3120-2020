import React, { useEffect, useState, Component } from 'react'
import {
    View,
    SafeAreaView,
    StatusBar
} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import styles from './Styles/MainBodyStyles'
import TabBar from './TabBar'
import LearnTab from './LearnTab'
import TestTab from './TestTab'
import ReviewTab from './ReviewTab'
import SettingTab from './SettingTab'
import {fcmService} from '../Services/FCMService';
console.disableYellowBox = true;
class MainBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
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
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                <ScrollableTabView
                    style={styles.container}
                    tabBarPosition='bottom'
                    initialPage={0}
                    renderTabBar={() => <TabBar {...this.props} />}
                >
                    <View tabLabel="Từ vựng" style={styles.tabView}>
                        <LearnTab {...this.props} />
                    </View>
                    <View tabLabel="Kiểm tra" style={styles.tabView}>
                        <TestTab {...this.props} />
                    </View>
                    <View tabLabel="Xem lại" style={styles.tabView}>
                        <ReviewTab {...this.props} />
                    </View>
                    <View tabLabel="Cài đặt" style={styles.tabView}>
                        <SettingTab {...this.props} />
                    </View>
                </ScrollableTabView>
            </SafeAreaView>
        );
    }

}
export default MainBody