import React, { Component } from "react";
import { ProgressBarAndroid, StyleSheet, View} from "react-native";

export function ProgressBar(){
    return(
        <View style={styles.container}>
            <ProgressBarAndroid />
            <ProgressBarAndroid styleAttr="Horizontal"/>
            <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
            <ProgressBarAndroid
                
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10
    }
});