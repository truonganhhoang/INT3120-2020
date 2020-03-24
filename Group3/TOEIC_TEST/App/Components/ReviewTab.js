import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/ReviewTabStyles'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ReviewTab extends Component {
    constructor(props) {
        super(props)
    }
    renderItem = ({ item }) => {
        return (
            <View>
                <Icon name={item.icon} />
                <Text>
                    {item.name}
                </Text>
            </View>
        )

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>XEM LẠI</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        )
    }
}
const DATA = [
    {
        id: 1,
        name: "Câu yêu thích",
        icon: "heart"
    },
    {
        id: 2,
        name: "Câu làm gần đây",
        icon: 'hourglass-half'
    },
    {
        id: 3,
        name: "Câu trả lời sai",
        icon: 'life-bouy'
    }
]
export default ReviewTab