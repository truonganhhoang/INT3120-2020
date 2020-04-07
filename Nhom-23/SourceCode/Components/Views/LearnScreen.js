// Core
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

//library
import { ScrollView } from "react-native-gesture-handler";

//Layout
import Header from '../Layout/Header'

//Sub Components
import HeaderLearnScreen from './HeaderLearnScreen';
import Tag from './Tag';

// style color
import {commonColor} from '../Common/Color';
import LessonTag from './LessonTag'


export default class HomeScreen extends Component {
    state = {
        names: [
            { 'name': 'Bài 1', 'id': 1 },
            { 'name': 'Bài 2', 'id': 2 },
            { 'name': 'Bài 3', 'id': 3 },
            { 'name': 'Bài 4', 'id': 4 },
            { 'name': 'Bài 5', 'id': 5 },
            { 'name': 'Bài 6', 'id': 6 },
            { 'name': 'Bài 7', 'id': 7 },
            { 'name': 'Bài 8', 'id': 8 },
            { 'name': 'Bài 9', 'id': 9 },
            { 'name': 'Bài 10', 'id': 10 },
            { 'name': 'Bài 11', 'id': 11 },
            { 'name': 'Bài 12', 'id': 12 },
            { 'name': 'Bài 13', 'id': 13 },
            { 'name': 'Bài 14', 'id': 14 },
            { 'name': 'Bài 15', 'id': 15 },
            { 'name': 'Bài 16', 'id': 16 },
            { 'name': 'Bài 17', 'id': 17 },
            { 'name': 'Bài 18', 'id': 18 },
            { 'name': 'Bài 19', 'id': 19 },
            { 'name': 'Bài 20', 'id': 20 }
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={mainLayout.header}>
                    <Header />
                </View>
                <View style={mainLayout.content}>
                    <ScrollView>
                        <HeaderLearnScreen />
                        <Tag />
                        <View style={{marginTop: 50}}>
                            <Text style={styles.title}>Danh sách bài học</Text>
                        </View>
                        {
                            this.state.names.map((item, index) => (
                                <LessonTag lesson={item.name} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}


var mainLayout = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    header: {
        flex: 1,
    },
    content: {
        flex: 12,
        margin: 10
    },

})

var styles = StyleSheet.create({
    container: {
        flex: 1
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
        padding: 20,
        margin: 2,
        borderColor: "#00BFFF",
        borderBottomWidth: 0.5,
        backgroundColor: '#fffff'
     },
     title:{
         color: "black",
         fontSize: 28,
         marginVertical: 10,
     }
})

