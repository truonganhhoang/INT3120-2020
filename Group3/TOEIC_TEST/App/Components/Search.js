import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SearchStyles'
import {
    View,
    Text,
    TextInput,
    FlatList,
    ScrollView,
    SafeAreaView,
} from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { words } from '../Data/word'
class SearchTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
        }
    }
    suggestInput = (input) => {
        const words = ['abc', 'ab', 'abcd', 'exuberant', 'destruction', 'present'];
        // const input = 'ab'
        var results = []
        if (input !== '') {
            for (var i = 0; i < words.length; i++) {
                if (words[i].length >= input.length) {
                    if (input === words[i].substring(0, input.length)) {
                        results.push(words[i])
                    }
                }
            }
        }

        console.log(results);
    }
    onChangeText = (input) => {
        this.setState({ input })
        // console.log(input)
        this.suggestInput(input)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.linearGradient}>
                    <Ionicons name='md-arrow-round-back' size={27} color='#F5F5F5'
                        onPress={() => { this.props.navigation.goBack() }}
                        style={styles.iconLeft}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="#F5F5F5"
                        onChangeText={input => this.onChangeText(input)}
                        value={this.state.input}
                    />
                    <Icon name='search' size={27} type='FontAwesome' color='#F5F5F5'
                        containerStyle={styles.iconRight}
                    />
                </View>

                <View>
                    <Text>{this.state.input}</Text>
                </View>
            </SafeAreaView>
        )
    }

}

export default SearchTab