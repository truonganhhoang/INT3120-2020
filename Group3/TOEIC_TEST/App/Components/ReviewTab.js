import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/ReviewTabStyles'
import {
    View,
    Text
} from 'react-native'
class ReviewTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>XEM LẠI</Text>
                </View>
            </>
        )
    }

}

export default ReviewTab