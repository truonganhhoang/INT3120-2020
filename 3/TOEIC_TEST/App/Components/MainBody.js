import React, { useEffect, useState, Component } from 'react'
import {
    View,
    SafeAreaView,
    StatusBar,
    Alert
} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import styles from './Styles/MainBodyStyles'
import TabBar from './TabBar'
import LearnTab from './LearnTab'
import TestTab from './TestTab'
import ReviewTab from './ReviewTab'
import SettingTab from './SettingTab'
import { fcmService } from '../Services/FCMService'
import AsyncStorage from '@react-native-community/async-storage';
console.disableYellowBox = true;
const MainBody = (props) => {

    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        getTheme()
        fcmService.register(onRegister, onNotification, onOpenNotification)

    }, [])
    const getTheme = async () => {
        try {
            const theme = await AsyncStorage.getItem('theme')
            if (theme == null) {
                setDarkMode(false)
            }
            else if (theme === 'true') {
                setDarkMode(true)
            }
            else if (theme === 'false') {
                setDarkMode(false)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const onRegister = (token) => {
        // console.log("[NotificationFCM] onRegister: ", token)
    }

    const onNotification = (notify) => {
        // console.log("[NotificationFCM] onNotification: ", notify)
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

    const onOpenNotification = (notify) => {
        // console.log("[NotificationFCM] onOpenNotification: ", notify)
        Alert.alert("Thông báo", notify._body)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
            <ScrollableTabView
                style={styles.container}
                tabBarPosition='bottom'
                initialPage={0}
                renderTabBar={() => <TabBar darkMode={darkMode} />}
            >
                <View tabLabel="Từ vựng" style={styles.tabView}>
                    <LearnTab {...props} darkMode={darkMode} />
                </View>
                <View tabLabel="Kiểm tra" style={styles.tabView}>
                    <TestTab {...props} darkMode={darkMode} />
                </View>
                <View tabLabel="Xem lại" style={styles.tabView}>
                    <ReviewTab {...props} darkMode={darkMode} />
                </View>
                <View tabLabel="Cài đặt" style={styles.tabView}>
                    <SettingTab darkMode={darkMode} setDarkMode={setDarkMode} />
                </View>
            </ScrollableTabView>
        </SafeAreaView>
    );
}

export default MainBody