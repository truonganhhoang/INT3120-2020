import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SettingTabStyles'
import {
    View,
    Text,
} from 'react-native'

class SettingTab extends Component {
    constructor(props) {
        super(props)
    }
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
