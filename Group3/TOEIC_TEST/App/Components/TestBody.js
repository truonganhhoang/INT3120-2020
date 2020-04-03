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
import styles from './Styles/TestBodyStyles'
class TestBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('TestList')}
                    >
                        <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                            style={styles.iconLeft}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Tiêu đề</Text>
                    <Icon name='search' size={27} color='transparent' containerStyle={styles.iconRight} />
                </View>
            </SafeAreaView>
        )
    }
}
export default TestBody