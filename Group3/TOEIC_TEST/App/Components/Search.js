import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SearchStyles'
import {
    View,
    Text,
    TextInput,
    FlatList,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    ToastAndroid,
    StatusBar
} from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { words } from '../Data/word'
import { StackActions, NavigationActions } from 'react-navigation'

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainBody' })],
})
class SearchTab extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            data: [],
        }
    }
    componentDidMount() {
        this.setState({ data: words })
    }
    Back = () => {
        this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate("MainBody")
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => { }}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{item.en}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderBody = (dataFlatList) => {
        return (
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataFlatList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
    suggestInput = () => {
        // const words = ['abc', 'ab', 'abcd', 'exuberant', 'destruction', 'present'];
        var dataSource = []
        this.state.data.map(item => dataSource.push(item.en))
        // console.log(dataSource)
        // const input = 'ab'
        var results = []
        if (this.state.input !== '') {
            for (var i = 0; i < dataSource.length; i++) {
                if (dataSource[i].length >= this.state.input.length) {
                    if (this.state.input.trim().toLocaleLowerCase() === dataSource[i].toLocaleLowerCase().substring(0, this.state.input.length)) {
                        results.push(dataSource[i])
                    }
                }
            }
        }
        this.renderBody(words)
    }
    onChangeText = (input) => {
        this.setState({ input })
    }
    translate = () => {
        var count = 0
        for (var i = 0; i < this.state.data.length; i++) {
            if (this.state.input.trim().toLocaleLowerCase() === this.state.data[i].en.trim().toLocaleLowerCase()) {
                this.setState({ data: this.state.data[i] })
                count++
                break
            }
        }
        if (count !== 0) this.props.navigation.navigate("Meaning", { dataSearch: this.state.data[i] })
        else ToastAndroid.show("Không tìm thấy kết quả", ToastAndroid.LONG)

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                <View style={styles.linearGradient}>
                    <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                        onPress={() => { this.Back() }}
                        style={styles.iconLeft}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="#F5F5F5"
                        onChangeText={input => this.onChangeText(input)}
                        value={this.state.input}
                    />
                    <TouchableOpacity
                        onPress={() => { this.translate() }}
                    >
                        <Icon name='search' size={27} type='FontAwesome' color='#F5F5F5'
                            containerStyle={styles.iconRight}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

}

export default SearchTab