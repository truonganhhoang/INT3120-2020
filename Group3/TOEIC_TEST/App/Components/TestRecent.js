import React, { Component } from 'react'
import {
    View,
    FlatList,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import styles from './Styles/TestRecentStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import { requestGET } from '../Services/Servies'
class TestRecent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            darkMode: false
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: this.state.darkMode == false ? "#EEEEEE" : "#212121", }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 40,
                    paddingBottom: 20,
                    backgroundColor: this.state.darkMode == false ? "#1976D2" : "#263238"
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Câu làm gần đây</Text>
                    <Icon name='search' size={27} color='transparent' containerStyle={styles.iconRight} />
                </View>

            </ SafeAreaView>
        )
    }
}
export default TestRecent