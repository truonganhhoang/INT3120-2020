// Core
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//library
import { ScrollView } from "react-native-gesture-handler";

//Layout
import Header from '../Layout/Header';

//Sub Components
import HeaderLearnScreen from './HeaderLearnScreen';

// style color
import LessonTag from './LessonTag';


export default class LessonScreen extends Component {
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
                        <View style={styles_section_3.wrapper}>
                            <Text style={[common_styles.title]}>Bộ từ vựng giao tiếp trình độ căn bản</Text>
                            <View style={styles_section_3.tag_wrapper}>
                                <Text style={styles_section_3.row}>Bài 1</Text>
                                <View style={[{ flex: 1, flexDirection: "row" }, styles_section_3.row]}>
                                    <View style={{ flex: 6, justifyContent: "center", alignItems: "center" }}>
                                        <View style={styles_section_3.progress_bar}>
                                            <View style={{ width: "10%", height: "100%", backgroundColor: "green" }}></View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 4, alignItems: "flex-end" }}><Text>Đã thuộc: 1/10</Text></View>
                                </View>
                                <View style={[styles_section_3.row, { flexDirection: "row" }]}>
                                    <View style={styles_section_3.tag}>
                                        <TouchableOpacity>
                                            <Text style={styles_section_3.tag_text}>Xem trước</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles_section_3.tag}>
                                        <TouchableOpacity>
                                            <Text style={styles_section_3.tag_text}>Học ngay</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles_section_3.tag}>
                                        <TouchableOpacity>
                                            <Text style={styles_section_3.tag_text}>Luyện tập</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 50 }}>
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


let mainLayout = StyleSheet.create({
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

let styles = StyleSheet.create({
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
    title: {
        color: "black",
        fontSize: 28,
        marginVertical: 10,
    }
});

let common = {
    mainBackgroundColor: "#00BFFF",
    mainColor: "#ffffff"
}
let common_styles = StyleSheet.create({
    wrapper: {

    },
    title: {
        color: "#483D8B",
        fontSize: 20,
        fontWeight: "bold"
    },
})

let styles_section_3 = StyleSheet.create({
    wrapper: {
        flex: 1,

    },
    row: {
        marginBottom: 10,
    },
    tag_wrapper: {
        borderWidth: 1,
        borderColor: common.mainBackgroundColor,
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    progress_bar: {
        height: 10,
        width: "100%",
        backgroundColor: "#fafaff",
        borderWidth: 1,
        borderRadius: 10,
    },
    tag: {
        borderWidth: 1,
        borderColor: "#0000ff",
        borderRadius: 5,
        padding: 5,
        backgroundColor: common.mainBackgroundColor,
        marginRight: 10
    },
    tag_text: {
        textAlign: "center",
        color: common.mainColor,
    }

});
