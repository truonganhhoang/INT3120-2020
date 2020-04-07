import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/TestTabStyles'
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
import { test } from '../Data/test'
class TestBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({ data: test })
    }
    renderItem = ({ item, index }) => {
        return (
            <Animatable.View delay={index * 300} animation='zoomInLeft' >
                <TouchableOpacity
                    onPress={() => { console.log({ index }) }}
                >
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={item.icon} size={45} style={{ padding: 10 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.part}>Part {item.part}</Text>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.linearGradient}>
                    <Text style={styles.title}>KIỂM TRA</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        )
    }
}
export default TestBar