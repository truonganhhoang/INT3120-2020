import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/LearnTabStyles'
import { Icon } from 'react-native-elements'
import {
    View,
    Text,
} from 'react-native'
export default class LearnTab extends Component {
    render() {
        return (
            <>
                <View style={styles.linearGradient}>
                    <Icon name='search' size={24} type='FontAwesome' color='transparent' />
                    <Text style={styles.title}>TỪ VỰNG TOEIC</Text>
                    <Icon name='search' size={27} type='FontAwesome' color='#F5F5F5'
                        containerStyle={styles.iconRight} />
                </View>
            </>
        )
    }
}
