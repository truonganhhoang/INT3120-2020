// Core
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

//Layout
import Header from '../Layout/Header'

// style color
import { commonColor,commonStyle } from '../Common/Color';



export default function SettingsScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Header />
            <View style={styles.section}>
                <Text style={styles.title}>Dictionary</Text>
                <View style={styles.row}>
                    <View style={styles.col_4}>
                        <Text style={styles.text}>Tra nhanh</Text>
                    </View>
                    <View style={styles.col_1}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>

            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Sound</Text>
                <View style={styles.row}>
                    <View style={styles.col_4}>
                        <Text style={styles.text}>Tự động phát âm</Text>
                    </View>
                    <View style={styles.col_1}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_4}>
                        <Text style={styles.text}>Cài đặt phát âm</Text>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Notification</Text>
                <View style={styles.row}>
                    <View style={styles.col_4}>
                        <Text style={styles.text}>Nhắc học từ vựng mỗi ngày</Text>
                    </View>
                    <View style={styles.col_1}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_4}>
                        <Text style={styles.text}>Nhận thông báo từ hằng ngày</Text>
                    </View>
                    <View style={styles.col_1}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Review</Text>
                <View style={styles.row}>
                    <View style={styles.col_4}>
                        <Text style={styles.text}>App hay? Giúp đánh giá 5 sao</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

var styles = StyleSheet.create({
    section: {
        borderBottomWidth: 0.5,
        borderColor: "#00BFFF",
        padding: 10,
        paddingTop: 15,
    },
    title:{
        color: "#00BFFF",
        fontSize: 20
    },
    text:{
        fontSize: 20,
        color: "#000000"
    },
    row:{
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    col_4:{
        flex: 4
    },
    col_1:{
        flex:1,
        alignItems: "flex-end"
    }
})

