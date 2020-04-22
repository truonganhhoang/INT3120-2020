//Core
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Layout
import Header from '../Layout/Header';
//Component
import Lesson from './Lesson';
import WordDetail from './WordDetail';


const Stack = createStackNavigator();

function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={mainLayout.header}>
                <Header />

            </View>
            <View style={mainLayout.content}>
                <View style={styles.container}>
                    {/* Section 1 */}
                    <View style={[styles.section_1, styles.section]}>
                        <View style={stylesSection1.wrapper}>
                            <View style={stylesSection1.content_wrapper}>
                                <View>
                                    <Text style={stylesSection1.title}>palace</Text>
                                    <Image style={stylesSection1.icon_refresh} source={require('../../assets/Image/refresh.png')} />
                                </View>
                                <View>
                                    <Text style={stylesSection1.word_type}>Danh từ</Text>
                                    <Image style={stylesSection1.icon_speaker} source={require('../../assets/Image/speaker.png')} />
                                </View>
                                <Text style={stylesSection1.meaning}>
                                    Nhà ở chính thức của vua, tổng giám mục hoặc giám mục, cung điện
                            </Text>
                            </View>

                        </View>
                    </View>
                    {/* Section 2 */}
                    <View style={[styles.section_2, styles.section]}>
                        <View style={styles_section_2.wrapper}>
                            <Text style={commonStyles.title}>Tìm kiếm gần đây</Text>
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
                        <View style={styles_section_3.wrapper}>
                            <Text style={[commonStyles.title]}>Bộ từ vựng giao tiếp trình độ căn bản</Text>
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
                                            onPress={() => navigation.navigate('Lesson')} 
                                        >
                                            <Text style={styles_section_3.tag_text}>Xem trước</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles_section_3.tag}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Lesson')}>
                                            <Text style={styles_section_3.tag_text}>Học ngay</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles_section_3.tag}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Lesson')}>
                                            <Text style={styles_section_3.tag_text}>Luyện tập</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Lesson" component={Lesson} />
                <Stack.Screen name="WordDetail" component={WordDetail} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

let mainLayout = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    header: {
        flex: 1,
    },
    content: {
        flex: 12,
    },
    footer: {
        flex: 1,
    }
});

const common = {
    mainBackgroundColor: "#00BFFF",
    mainColor: '#ffffff'
};

let commonStyles = StyleSheet.create({
    wrapper: {
        margin: 10,
    },
    title: {
        color: '#483D8B',
        fontSize: 20,
        fontWeight: 'bold'
    },
});


let styles = StyleSheet.create({
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
});

let stylesSection1 = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: common.mainBackgroundColor,
        borderRadius: 8,
        borderColor: '#6A5ACD',
        margin: 10,
    },
    content_wrapper: {
        margin: 10,
    },
    title: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    icon_refresh: {
        width: 24,
        height: 24,
        position: 'absolute',
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
        position: 'absolute',
        right: 5,
        top: 8
    },
    meaning: {
        color: '#ffffff'
    }
});

let styles_section_2 = StyleSheet.create({
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

let styles_section_3 = StyleSheet.create({
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
        width: '100%',
        backgroundColor: '#fafaff',
        borderWidth: 1,
        borderRadius: 10,
    },
    tag: {
        borderWidth: 1,
        borderColor: '#0000ff',
        borderRadius: 5,
        padding: 5,
        backgroundColor: common.mainBackgroundColor,
        marginRight: 10
    },
    tag_text: {
        textAlign: 'center',
        color: common.mainColor,
    }

});
