import { View, ActivityIndicator, Dimensions } from "react-native";
import styles from "./style";
import React from 'react';
const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, EatBeanLoader } from 'react-native-indicator';
const Activity = () => {
    return (
        <View style={[styles.containers, styles.horizontal]}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <CirclesLoader color='#f57f17' size={50} />
            </View>
        </View>
    )
}
export default Activity;