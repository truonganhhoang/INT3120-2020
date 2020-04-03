import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TestListStyles'
import * as Progress from 'react-native-progress'

class TestList extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)

    }
    goTo() {
        console.log("goto")
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.containerFlatList}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('TestBody')}
                >
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                    <Icon name="eye" size={18} />
                    <Text style={{ paddingLeft: 10 }}>{item.date}</Text>
                    <Text style={{ paddingLeft: 10 }}>{item.time}</Text>
                    <Text style={{ paddingLeft: Dimensions.get("screen").width - 250 }}>{item.progress}</Text>
                </View>
                <Progress.Bar progress={item.progress_bar} width={Dimensions.get("screen").width - 50} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.getParam('name')}</Text>
                    <Icon name='search' size={27} color='transparent' />
                </View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.toString()}
                />
            </SafeAreaView>
        )
    }
}
export default TestList

const data = [
    {
        id: "1",
        title: "Tiêu đề 1",
        date: "1/1/2020",
        time: "10:50 AM",
        progress: "5/10",
        progress_bar: 0.5,
    },
    {
        id: "2",
        title: "Tiêu đề 2",
        date: "2/1/2020",
        time: "10:50 AM",
        progress: "7/10",
        progress_bar: 0.7,
    },
    {
        id: "3",
        title: "Tiêu đề 3",
        date: "3/1/2020",
        time: "10:50 AM",
        progress: "5/10",
        progress_bar: 0.5,
    },
    {
        id: "4",
        title: "Tiêu đề 4",
        date: "5/1/2020",
        time: "10:50 AM",
        progress: "7/10",
        progress_bar: 0.7,
    },
    {
        id: "5",
        title: "Tiêu đề 5",
        date: "11/3/2020",
        time: "10:50 AM",
        progress: "7/10",
        progress_bar: 0.7,
    },
    {
        id: "6",
        title: "Tiêu đề 6",
        date: "11/3/2020",
        time: "10:50 AM",
        progress: "7/10",
        progress_bar: 0.7,
    }
]