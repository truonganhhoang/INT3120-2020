import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/MeaningStyles'
import {
    View,
    Text,
    TextInput,
    FlatList,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackActions, NavigationActions } from 'react-navigation'
import Tts from 'react-native-tts'
import { requestGET, HOST } from '../Services/Servies'
import { WebView } from 'react-native-webview'
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Search' })],
})

class Meaning extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            dataSearch: [],
            word: '',
            meaning: '',
            sound: ''
        }
    }
    componentDidMount() {
        let data = this.props.navigation.getParam('dataSearch').toString()
        this.fetchData(data)
    }
    fetchData = async (data) => {
        let data1 = await requestGET(`${HOST}/words/search?keyword=${data}`)
        let id = data1.data[0].id
        let data2 = await requestGET(`${HOST}/words/viewWord/${id}`)
        let data3 = data2.data
        this.setState({ word: data3.word, sound: data3.sound, meaning: data3.meaning })
    }
    Back = () => {
        this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate("Search")
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                        onPress={() => { this.Back() }}
                        style={styles.iconLeft}
                    />
                    <Text style={styles.title}>{this.state.word}</Text>
                    <TouchableOpacity
                        onPress={() => { Tts.speak(this.state.word) }}
                    >
                        <Icon name='volume-up' size={27} type='FontAwesome' color='#F5F5F5'
                            containerStyle={styles.iconRight}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.view}>
                    <Text style={styles.en}>{this.state.word} {this.state.sound}</Text>
                </View>
                <WebView
                    scalesPageToFit={false}
                    source={{ html: `${this.state.meaning}` }} />

            </SafeAreaView>
        )
    }
}

export default Meaning