//Core
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Styles
import { styles } from '../../assets/Styles/Lesson/lessontag';
import { commonStyle } from '../Common/Color';


export default class LessonTag extends Component {

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Lesson', {
                    lessonName: this.props.lesson
                })}
            >
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
            </TouchableOpacity>
        );
    }
}
