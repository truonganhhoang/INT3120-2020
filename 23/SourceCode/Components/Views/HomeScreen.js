//Core
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Layout
import Header from '../Layout/Header';

//Component
import Lesson from './Lesson';
import WordDetail from './WordDetail';
import OnlineTranslation from './Home/OnlineTranslation';
import Practice from './Home/Practice';

//Style
import { mainLayout, commonStyles, styles, stylesSection1, styles_section_2, styles_section_3 } from '../../assets/Styles/Home/home';

const Stack = createStackNavigator();

const data = {
    listWord: [
        { word: 'wednesday', spelling: '/wenzdei/', type: 'noun', meaning: 'thứ tư, Thứ 4' },
        { word: 'basket', spelling: '/baskit/', type: 'noun', meaning: 'cái giỏ, cái rổ' },
        { word: 'bathroom', spelling: '/bathrum/', type: 'noun', meaning: 'phòng tắm, nhà tắm' },
        { word: 'bed', spelling: '/bed/', type: 'noun', meaning: 'giường, cái gường' },
        { word: 'bedroom', spelling: '/bedrum/', type: 'noun', meaning: 'phòng ngủ' },
        { word: 'beef', spelling: '/bi:f/', type: 'noun', meaning: 'thịt bò' },
        { word: 'beer', spelling: '/bier/', type: 'noun', meaning: 'bia' },
        { word: 'bell', spelling: '/bel/', type: 'noun', meaning: 'cái chuông, quả chuông' },
        { word: 'bicycle', spelling: '/baisikl/', type: 'noun', meaning: 'chiếc xe đạp, xe đạp' },
        { word: 'big', spelling: '/big/', type: 'adjective', meaning: 'to, lớn, béo' }
    ],
    index: 0
};

function Home({ route, navigation }) {
    const [word, setWord] = useState(data.listWord[data.index].word);
    const [type, setType] = useState(data.listWord[data.index].type);
    const [meaning, setMeaning] = useState(data.listWord[data.index].meaning);
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
                                    <Text style={stylesSection1.title}>{word}</Text>
                                    <TouchableOpacity
                                        style={stylesSection1.wrapperIconRefresh}
                                        onPress={() => {
                                            if (data.index < data.listWord.length - 1) { data.index++; } else data.index = 0;
                                            setWord(data.listWord[data.index % data.listWord.length].word);
                                            setType(data.listWord[data.index % data.listWord.length].type);
                                            setMeaning(data.listWord[data.index % data.listWord.length].meaning);
                                        }}
                                    >
                                        <Image style={stylesSection1.icon_refresh} source={require('../../assets/Image/refresh.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={stylesSection1.word_type}>{type}</Text>
                                    <TouchableOpacity
                                        style={stylesSection1.wrapperIconSpeaker}
                                        onPress={() => alert('click')}
                                    >
                                        <Image style={stylesSection1.icon_speaker} source={require('../../assets/Image/speaker.png')} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={stylesSection1.meaning}>
                                    {meaning}
                                </Text>
                            </View>

                        </View>
                    </View>
                    {/* Section 2 */}
                    <View style={[styles.section_2, styles.section]}>
                        <View style={styles_section_2.wrapper}>
                            <Text style={commonStyles.title}>Tìm kiếm gần đây</Text>
                            <View>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => navigation.navigate('OnlineTranslation')}
                                >
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
                                            onPress={() => navigation.navigate('WordDetail', {
                                                title: '1/15',
                                                word: 'wednesday',
                                                spelling: 'abc',
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
                <Stack.Screen 
                    name="Practice" 
                    component={Practice} 
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="OnlineTranslation"
                    component={OnlineTranslation}
                    options={{
                        headerShown: true,
                        title: 'Dịch online',
                        headerStyle: {
                            backgroundColor: '#00BFFF',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => alert('click')}
                            >
                                <Image
                                    style={{ width: 32, height: 32, marginRight: 20 }}
                                    source={require('../../assets/Image/speaker-lesson.png')}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
