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
    }
    fetchData = async () => {
        var deviceId = DeviceInfo.getDeviceId()
        var id = this.props.navigation.getParam('id').toString()
        var newData = await requestGET(`${HOST}/tests/viewTest/${id}?client_id=${deviceId}`)
        this.setState({ data: newData.data.list_exercises })
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.containerFlatList}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('TestBody', { id: item.id, description: item.description })}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.name}</Text>
                        {/* <Text style={{ paddingLeft: Dimensions.get("screen").width - 250 }}>{item.progress}</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                        <Icon name="eye" size={18} />
                        <Text style={{ paddingLeft: 10 }}>{item.date_modified == "none" ? new Date().toUTCString() : item.date_modified}</Text>
                        <Text style={{ paddingLeft: Dimensions.get("screen").width - 320 }}>{item.progress}</Text>
                    </View>
                    <Progress.Bar progress={item.progress_bar} width={Dimensions.get("screen").width - 50} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                <View style={styles.linearGradient}>
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
