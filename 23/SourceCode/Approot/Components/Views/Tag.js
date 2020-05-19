// Core
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Lesson from './Lesson';

// style color
import { commonColor } from '../Common/Color';


export default class Tag extends Component {
    return(){
        return (
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
    
        )
    }
}

var common = {
    mainBackgroundColor: "#00BFFF",
    mainColor: "#ffffff"
}
var common_styles = StyleSheet.create({
    wrapper: {

    },
    title: {
        color: "#483D8B",
        fontSize: 20,
        fontWeight: "bold"
    },
})

var styles_section_3 = StyleSheet.create({
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

})


