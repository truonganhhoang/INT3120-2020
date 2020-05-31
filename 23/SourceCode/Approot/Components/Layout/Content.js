import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Tag from '../Views/Tag'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home"
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* Section 1 */}
                <View style={[styles.section_1, styles.section]}>
                    <View style={styles_section_1.wrapper}>
                        <View style={styles_section_1.content_wrapper}>
                            <View>
                                <Text style={styles_section_1.title}>palace</Text>
                                <Image style={styles_section_1.icon_refresh} source={require('../../assets/Image/refresh.png')} />
                            </View>
                            <View>
                                <Text style={styles_section_1.word_type}>Danh từ</Text>
                                <Image style={styles_section_1.icon_speaker} source={require('../../assets/Image/speaker.png')} />
                            </View>
                            <Text style={styles_section_1.meaning}>
                                Nhà ở chính thức của vua, tổng giám mục hoặc giám mục, cung điện
                            </Text>
                        </View>

                    </View>
                </View>
                {/* Section 2 */}
                <View style={[styles.section_2, styles.section]}>
                    <View style={styles_section_2.wrapper}>
                        <Text style={common_styles.title}>Tìm kiếm gần đây</Text>
                        <View>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                <View style={styles_section_2.button}>
                                    <Image style={styles_section_2.icon_online_translate} source={require('../../assets/Image/online-translate.png')} />
                                    <Text style={styles_section_2.button_text}>DỊCH ONLINE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Section 3 */}
                <View style={[styles.section_3]}>
                    {/* <Tag /> */}
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
        margin: 10,
    },
    title: {
        color: "#483D8B",
        fontSize: 20,
        fontWeight: "bold"
    },
})


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {

    },
    section_1: {
        flex: 3
    },
    section_2: {
        flex: 2
    },
    section_3: {
        flex: 5,
        margin: 10
    }
})

var styles_section_1 = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: common.mainBackgroundColor,
        borderRadius: 8,
        borderColor: "#6A5ACD",
        margin: 10,
    },
    content_wrapper: {
        margin: 10,
    },
    title: {
        fontSize: 32,
        color: "#ffffff",
        fontWeight: "bold"
    },
    icon_refresh: {
        width: 24,
        height: 24,
        position: "absolute",
        right: 0
    },
    word_type: {
        color: "#483D8B",
        fontWeight: "bold",
        marginVertical: 10
    },
    icon_speaker: {
        width: 24,
        height: 24,
        position: "absolute",
        right: 5,
        top: 8
    },
    meaning: {
        color: "#ffffff"
    }
});

var styles_section_2 = StyleSheet.create({
    wrapper: {
        margin: 10,
    },
    button: {
        backgroundColor: common.mainBackgroundColor,
        padding: 10,
        borderRadius: 5,
        width: '50%',
        marginTop: 8
    },
    button_text: {
        color: "#ffffff",
        textAlign: "center"
    },
    icon_online_translate: {
        width: 32,
        height: 32,
        position: "absolute",
        left: 5,
        top: 3
    }
});

