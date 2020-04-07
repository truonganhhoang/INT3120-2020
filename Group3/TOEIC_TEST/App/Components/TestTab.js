import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/TestTabStyles'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
import { requestGET, HOST } from '../Services/Servies'
class TestBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        var newData = await requestGET(`${HOST}/tests/listTest`)
        this.setState({ data: newData.data })
    }
    renderItem = ({ item, index }) => {
        return (
            <Animatable.View delay={index * 300} animation='zoomInLeft' >
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('TestList', { name: item.description, id: item.id })}
                >
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={item.icon} size={45} style={{ padding: 10 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.part}>{item.name}</Text>
                                <Text style={styles.name}>{item.description}</Text>
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