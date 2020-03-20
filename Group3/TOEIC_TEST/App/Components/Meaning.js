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
class Meaning extends Component {
    static navigationOptions = {
        headerShown: false
      }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                        onPress={() => { this.props.navigation.goBack() }}
                        style={styles.iconLeft}
                    />
                    <Text style={styles.title}>{this.props.navigation.getParam('data')}</Text>
                    <Icon name='search' size={27} type='FontAwesome' color='transparent'
                        containerStyle={styles.iconRight}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default Meaning