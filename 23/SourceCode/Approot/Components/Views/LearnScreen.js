// Core
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//library
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Layout
import Header from '../Layout/Header';

//Components
import HeaderLearnScreen from './HeaderLearnScreen';
import Lesson from './Lesson';
import LessonTag from './LessonTag';
import WordDetail from './WordDetail';
import Practice from './Home/Practice';

//Styles
import { mainLayout, styles, common_styles, styles_section_3 } from '../../assets/Styles/Learn/learn';

//Data
import { names } from '../../assets/Data/ListLesson/listnamelesson';

const Stack = createStackNavigator();

function Learn({ navigation, route }) {
    const [lessonName, setLessonName] = useState('Bài 1');
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
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Lesson', {
                                            lessonName
                                        })}
                                    >
                                        <Text style={styles_section_3.tag_text}>Xem trước</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles_section_3.tag}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('WordDetail', {
                                            title: '1/15',
                                            word: 'wednesday',
                                            spelling: '/wenzdei/',
                                            type: 'noun',
                                            meaning: 'Thứ tư',
                                            route: { route },
                                            navigation: { navigation }
                                        })}
                                    >
                                        <Text style={styles_section_3.tag_text}>Học ngay</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles_section_3.tag}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Practice')}
                                    >
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
                        names.map((item, index) => (
                            <TouchableOpacity key={index}>
                                <LessonTag lesson={item.name} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default class LessonScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Learn" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Learn" component={Learn} />
                    <Stack.Screen name="Lesson" component={Lesson} />
                    <Stack.Screen name="WordDetail" component={WordDetail} />
                    <Stack.Screen
                        name="Practice"
                        component={Practice}
                        options={{
                            headerShown: true,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

