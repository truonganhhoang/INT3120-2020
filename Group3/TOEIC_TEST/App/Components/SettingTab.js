import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SettingTabStyles'
import {
    View,
    Text,
    Button
} from 'react-native'
import {fcmService} from '../Services/FCMService';

class SettingTab extends Component {
    render() {

        return (
            <>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>CÀI ĐẶT</Text>
                </View>
                <Button
                title="Press me"
                onPress={() => {
                    const date = new Date()
                    date.setMinutes(date.getMinutes() + 1) //set time ngay sau 1 phut
                    const title = "This is title"
                    const content = "this is content....."
                    fcmService.scheduleDailyNotification(title, content, date.getTime());
                }}
                />  
            </>
        )
    }
}
export default SettingTab
