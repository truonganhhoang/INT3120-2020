// Core
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

//library
import { ScrollView } from "react-native-gesture-handler";

//Layout
import Header from '../Layout/Header'

//Sub Components
import HeaderLearnScreen from './HeaderLearnScreen';



export default class HomeScreen extends Component {
    state = {
        names: [
            { 'name': 'Business English Vocabulary', 'id': 1 },
            { 'name': 'Easy Vocabulary', 'id': 2 },
            { 'name': 'GMAT Core English', 'id': 3 },
            { 'name': 'GRE Core English', 'id': 4 },
            { 'name': 'Hard Vocabulary', 'id': 5 },
            { 'name': 'IETLS Core English', 'id': 6 },
            { 'name': 'Middle Vocabulary', 'id': 7 },
            { 'name': 'SAT Core English', 'id': 8 },
            { 'name': 'TOEFL Core English', 'id': 9 }
        ]
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={mainLayout.header}>
                    <Header />
                </View>
                <View style={mainLayout.content}>
                    <HeaderLearnScreen />
                    <ScrollView>
                        
                        {
                            this.state.names.map((item, index) => (
                                <View key={item.id} style={styles.item2}>
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                    

                </View>
            </View>
        )
    }
}

var common = StyleSheet.create({
    textColor:{
        color: "#ffffff"
    },
    labelColor:{ 
        color: "#483D8B"
    },
    mainColor:{
        color: "#00BFFF"
    }
})

var mainLayout = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    header: {
        flex: 1,

    },
    content: {
        flex: 12,
        height: "80%"
    },

})

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: "#483D8B",
        fontWeight: "bold"
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,

    },
    item2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 2,
        borderColor: "#00BFFF",
        borderBottomWidth: 0.5,
        backgroundColor: '#fffff'
     }
})

