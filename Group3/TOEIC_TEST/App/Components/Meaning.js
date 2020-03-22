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
} from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackActions, NavigationActions } from 'react-navigation';

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
            dataSuggest: [],
        }
    }
    componentDidMount() {
        console.log(this.props.navigation.getParam('dataSearch'))
        this.setState({ dataSearch: this.props.navigation.getParam('dataSearch') })
    }
    Back =()=>{
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
                    <Text style={styles.title}>{this.state.dataSearch.en}</Text>
                    <Icon name='search' size={27} type='FontAwesome' color='transparent'
                        containerStyle={styles.iconRight}
                    />
                </View>
                <View style={styles.view}>
                    <Text style={styles.en}>{this.state.dataSearch.en} [{this.state.dataSearch.transcription}]</Text>
                    <Text style={styles.vi}>{this.state.dataSearch.vi}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Meaning