//Core
import React, { Component } from "react";
import { View, Text } from "react-native";

//Styles
import { styles } from '../../assets/Styles/Lesson/lessontag';
import { commonStyle } from '../Common/Color';

export default class LessonTag extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={commonStyle.title}>{this.props.lesson}</Text>
                <View style={styles.row}>
                    <View style={styles.col_1}>
                        <View style={styles.progress_bar} />
                    </View>
                    <View style={styles.col_2}>
                        <Text>Đã thuộc: 0/10</Text>
                    </View>
                </View>
            </View>
        );
    }
}
