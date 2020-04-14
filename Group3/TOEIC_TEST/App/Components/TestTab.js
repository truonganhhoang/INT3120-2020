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
                    <View style={{
                        backgroundColor: this.props.darkMode == false ? "#F5F5F5" : "#263238",
                        padding: 10,
                        marginVertical: 10,
                        marginHorizontal: 10,
                        elevation: 5,
                        borderRadius: 10,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={item.icon} size={45} style={{ padding: 10 }} color={this.props.darkMode == false ? "#212121" : "#EEEEEE"} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{
                                    color: this.props.darkMode == false ? "#212121" : "#F5F5F5",
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    padding: 10,
                                    paddingLeft: 20,
                                }}>{item.name}</Text>
                                <Text style={{ paddingLeft: 20, color: this.props.darkMode == false ? "#8D6E63" : "#616161", }}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: this.props.darkMode == false ? "#EEEEEE" : "#212121" }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 40,
                    paddingBottom: 20,
                    backgroundColor: this.props.darkMode == false ? "#1976D2" : "#263238"
                }}>
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