import { View, ActivityIndicator } from "react-native";
import styles from "./style";
import React from 'react';
const Activity = () => {
    return (
        <View style={[styles.containers, styles.horizontal]}>
            <ActivityIndicator size="large" color="#ff5e00" />
        </View>
    )
}
export default Activity;