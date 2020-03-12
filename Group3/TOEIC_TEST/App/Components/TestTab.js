import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/TestTabStyles'
import {
    View,
    Text
} from 'react-native'
import { Icon } from 'react-native-elements'
class TestBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>KIỂM TRA</Text>
                </View>
            </>
        )
    }
}
export default TestBar