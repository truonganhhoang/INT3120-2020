// Core
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// style color
import { commonColor,commonStyle } from '../Common/Color';

export default class HeaderHomeScreen extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={commonStyle.title}>{this.props.lesson}</Text>
                <View style={styles.row}>
                    <View style={styles.col_1}>
                        <View style={styles.progress_bar}></View>
                    </View>
                    <View style={styles.col_2}>
                        <Text>Đã thuộc: 1/10</Text>
                    </View>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    wrapper:{
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        marginBottom: 10
    },
    row:{
        flex: 1,
        flexDirection: "row"
    },
    col_1:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    col_2:{
        flex: 1,
        alignItems: "flex-end",
        
    },
    progress_bar:{
        height: 10,
        width: "100%",
        backgroundColor: "#fafaff",
        borderWidth: 1,
        borderRadius: 10,
    }
});




