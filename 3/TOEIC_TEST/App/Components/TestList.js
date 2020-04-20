import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TestListStyles'
import * as Progress from 'react-native-progress'
import { requestGET, HOST } from '../Services/Servies'
import DeviceInfo from 'react-native-device-info'
import { adService, Banner, UNIT_ID_BANNER } from '../Services/AdService'
import AsyncStorage from '@react-native-community/async-storage';

class TestList extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.fetchData()
        this.getTheme()
    }
    fetchData = async () => {
        var deviceId = DeviceInfo.getDeviceId()
        var id = this.props.navigation.getParam('id').toString()
        var newData = await requestGET(`${HOST}/tests/viewTest/${id}?client_id=${deviceId}`)
        this.setState({ data: newData.data.list_exercises })
    }
    getTheme = async () => {
        try {
            const value = await AsyncStorage.getItem('theme')
            if (value === 'true') this.setState({ darkMode: true })
            else if (value === 'false') this.setState({ darkMode: false })
        } catch (e) { console.log(e) }
    }
    renderItem = ({ item }) => {
        return (
            <View style={{
                flex: 1,
                width: Dimensions.get("window").width - 30,
                backgroundColor: this.props.darkMode === false ? "#F5F5F5" : "#263238",
                marginVertical: 6,
                marginHorizontal: 15,
                elevation: 5,
                borderRadius: 10,
                padding: 10
            }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('TestBody', { id: item.id, description: item.description })}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: this.state.darkMode == false ? "#212121" : "#F5F5F5" }}>{item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                        <Icon name="eye" size={18} color={this.state.darkMode === false ? "#8D6E63" : "#BDBDBD"} />
                        <Text style={{ paddingLeft: 10, color: this.state.darkMode === false ? "#8D6E63" : "#BDBDBD" }}>{item.date_modified == "none" ? new Date().toUTCString() : item.date_modified}</Text>
                        <Text style={{ paddingLeft: Dimensions.get("screen").width - 300, color: this.state.darkMode === false ? "#8D6E63" : "#BDBDBD" }}>{item.progress}</Text>
                    </View>
                    <Progress.Bar progress={item.progress_bar} width={Dimensions.get("screen").width - 50} color={this.state.darkMode === false ? "#8D6E63" : "#BDBDBD"} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MainBody')}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.getParam('name')}</Text>
                    <Icon name='search' size={27} color='transparent' />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.toString()}
                />

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
        )
    }
}
export default TestList
