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
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackActions, NavigationActions } from 'react-navigation'
import { requestGET, HOST } from '../Services/Servies'
import { adService, Banner, UNIT_ID_BANNER } from '../Services/AdService'
import AsyncStorage from '@react-native-community/async-storage';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)
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
            dataSource: [],
            darkMode:false,
        }
    }
    componentDidMount() {
        this.fetchData()
        this.getTheme()
    }
    fetchData = async () => {
        var dataSearch = await requestGET(`${HOST}/words/viewAllWord`)
        this.setState({ data: dataSearch.data })
    }
    getTheme = async () => {
        try {
            const value = await AsyncStorage.getItem('theme')
            if (value === 'true') this.setState({ darkMode: true })
            else if (value === 'false') this.setState({ darkMode: false })
        } catch (e) { console.log(e) }
    }
    Back = () => {
        this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate("MainBody")
    }
    renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("Meaning", { dataSearch: `${item}` }) }}
                >
                    <View style={{
                        marginLeft: 50,
                        backgroundColor: this.state.darkMode === false ? "#1976D2" : "#263238",
                        marginRight: 50,
                        borderBottomColor: '#808080',
                        padding: 15,
                    }}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    renderBody = () => {
        return (
            <SafeAreaView>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        )
    }
    suggestInput = () => {
        var dataSource = []
        this.state.data.map(item => dataSource.push(item.word))
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
        this.setState({ dataSource: results })
    }

    onChangeText = async (input) => {
        await this.setState({ input })
        this.suggestInput()
    }
    translate = () => {
        var count = 0
        for (var i = 0; i < this.state.data.length; i++) {
            if (this.state.input.trim().toLocaleLowerCase() === this.state.data[i].word.trim().toLocaleLowerCase()) {
                this.setState({ data: this.state.data[i] })
                count++
                break
            }
        }
        if (count !== 0) this.props.navigation.navigate("Meaning", { dataSearch: this.state.dataSource })
        else ToastAndroid.show("Không tìm thấy kết quả", ToastAndroid.LONG)
    }
    render() {
        return (
            <DismissKeyboard>
                <SafeAreaView style={{ flex: 1, backgroundColor: this.state.darkMode === false ? "#EEEEEE" : "#212121" }}>
                    <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 40,
                        paddingBottom: 20,
                        backgroundColor: this.state.darkMode === false ? "#1976D2" : "#263238"
                    }}>
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
                        <TouchableOpacity onPress={() => { this.translate() }}    >
                            <Icon name='search' size={27} type='FontAwesome' color='#F5F5F5'
                                containerStyle={styles.iconRight}
                            />
                        </TouchableOpacity>
                    </View>
                    {this.renderBody()}
                    <View style={{ position: 'absolute', bottom: 0 }}>
                        <Banner
                            unitId={UNIT_ID_BANNER}
                            size={"SMART_BANNER"}
                            request={adService.buildRequest().build()}
                            onAdLoaded={() => {
                                console.log('Advert loaded');
                            }}
                        />
                    </View>
                </SafeAreaView>
            </DismissKeyboard>
        )
    }
}

export default SearchTab