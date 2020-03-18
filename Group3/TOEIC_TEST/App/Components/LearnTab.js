import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/LearnTabStyles'
import { Icon } from 'react-native-elements'
import {
    View,
    Text,
    FlatList,
} from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

export default class LearnTab extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    componentDidMount() {
        this.setState({ selectedIndex: 0 })
        // if (this.state.selectedIndex == 0) console.log("Bai hoc")
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex: selectedIndex })
        // if (selectedIndex == 0) console.log("Bai hoc")
        // else if (selectedIndex == 1) console.log("Tu danh dau")
        // else if (selectedIndex == 2) console.log("Tu nhac nho")
    }
    render() {
        const buttons = ['Bài học', 'Từ đánh dấu', 'Từ nhắc nhở']
        const { selectedIndex } = this.state
        return (
            <>
                <View style={styles.linearGradient}>
                    <Icon name='search' size={24} type='FontAwesome' color='transparent' />
                    <Text style={styles.title}>TỪ VỰNG TOEIC</Text>
                    <Icon name='search' size={27} type='FontAwesome' color='#F5F5F5'
                        containerStyle={styles.iconRight} 
                        onPress={()=>{this.props.navigation.navigate('Search')}}
                        />
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 40, borderRadius: 20 }}
                />
            </>
        )
    }
}
