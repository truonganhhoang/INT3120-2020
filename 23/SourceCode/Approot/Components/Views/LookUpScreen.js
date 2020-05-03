// Core
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//library
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

//Layout
import Header from '../Layout/Header';

//Styles
import { mainLayout, styles } from '../../assets/Styles/LookUp/lookup';

export default class LookUpScreen extends Component {
    state = {
        names: [
            { 'name': 'Business English Vocabulary', 'id': 1 },
            { 'name': 'Easy Vocabulary', 'id': 2 },
            { 'name': 'GMAT Core English', 'id': 3 },
            { 'name': 'GRE Core English', 'id': 4 },
            { 'name': 'Hard Vocabulary', 'id': 5 },
            { 'name': 'Laura', 'id': 6 },
            { 'name': 'IETLS Core English', 'id': 7 },
            { 'name': 'Middle Vocabulary', 'id': 8 },
            { 'name': 'SAT Core English', 'id': 9 },
            { 'name': 'TOEFL Core English', 'id': 10 }
        ]
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={mainLayout.header}>
                    <Header />
                </View>
                <View style={mainLayout.content}>
                    <ScrollView>
                        {
                            this.state.names.map((item, index) => (
                                <TouchableOpacity
                                    onPress={() => alert('click')}
                                    key={index}
                                >
                                    <View key={item.id} style={styles.item2}>
                                        <Text style={styles.title}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            </View >
        );
    }
}

