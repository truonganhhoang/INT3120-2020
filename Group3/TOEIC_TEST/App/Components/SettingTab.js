import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SettingTabStyles'
import {
    View,
    Text,
} from 'react-native'
import {fcmService} from '../Services/FCMService';

class SettingTab extends Component {
    render() {
        return (
            <>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>CÀI ĐẶT</Text>
                </View>
            </>
        )
    }

}
export default SettingTab
