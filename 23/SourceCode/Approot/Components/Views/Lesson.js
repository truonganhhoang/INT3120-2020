import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import WordTag from './WordTag';

import { ScrollView } from 'react-native-gesture-handler';


const data = {
    listDoubleWord: [
        {
            word1: { 
                word: 'wednesday', 
                spelling: '/wenzdei/', 
                type: 'noun', 
                meaning: 'thứ tư, Thứ 4' 
            },
            word2: {
                word: 'blithers',
                spelling: '/bliðə/',
                type: 'động từ',
                meaning: 'nói ba hoa ngớ ngẩn'
            }
        },
        {
            word1: { 
                word: 'basket', 
                spelling: '/baskit/', 
                type: 'noun', 
                meaning: 'cái giỏ, cái rổ' 
            },
            word2: {
                word: 'blistered',
                spelling: '/blɪstəd/',
                type: 'danh từ',
                meaning: '(thông tục) quấy rầy, làm phiền'
            }
        },
        {
            word1: { 
                word: 'bathroom', 
                spelling: '/bathrum/', 
                type: 'noun', 
                meaning: 'phòng tắm, nhà tắm' 
            },
            word2: {
                word: 'canthus',
                spelling: '/kænθəs/',
                type: 'danh từ, số nhiều canthi',
                meaning: '(giải phẫu) khoé mắt'
            }
        },
        {
            word1: { 
                word: 'bed', 
                spelling: '/bed/', 
                type: 'noun', 
                meaning: 'giường, cái gường' 
            },
            word2: {
                word: 'voyages',
                spelling: '/vɔiidʒ/',
                type: 'danh từ',
                meaning: 'chuyến đi xa, cuộc hành trình dài (nhất là bằng tàu thủy, máy bay)'
            }
        },
        {
            word1: { 
                word: 'friday', 
                spelling: '/fraidei/', 
                type: 'noun', 
                meaning: 'thứ Sáu' 
            },
            word2: {
                word: 'weather-vane',
                spelling: '/weðərveɪn/',
                type: 'danh từ',
                meaning: 'chong chóng gió (cho biết chiều gió) (như) weathercock'
            }
        }
        // { word: 'basket', spelling: '/baskit/', type: 'noun', meaning: 'cái giỏ, cái rổ' },
        // { word: 'bathroom', spelling: '/bathrum/', type: 'noun', meaning: 'phòng tắm, nhà tắm' },
        // { word: 'bed', spelling: '/bed/', type: 'noun', meaning: 'giường, cái gường' },
        // { word: 'bedroom', spelling: '/bedrum/', type: 'noun', meaning: 'phòng ngủ' },
        // { word: 'beef', spelling: '/bi:f/', type: 'noun', meaning: 'thịt bò' },
        // { word: 'beer', spelling: '/bier/', type: 'noun', meaning: 'bia' },
        // { word: 'bell', spelling: '/bel/', type: 'noun', meaning: 'cái chuông, quả chuông' },
        // { word: 'bicycle', spelling: '/baisikl/', type: 'noun', meaning: 'chiếc xe đạp, xe đạp' },
        // { word: 'big', spelling: '/big/', type: 'adjective', meaning: 'to, lớn, béo' },
        // { word: 'bike', spelling: '/baik/', type: 'noun', meaning: 'xe đạp' },
        // { word: 'bird', spelling: '/bird/', type: 'noun', meaning: 'con chim' },
        // { word: 'black', spelling: '/black/', type: 'noun', meaning: 'đen, màu đen' },
        // { word: 'blue', spelling: '/blu:/', type: 'adjective', meaning: 'màu xanh, màu xanh da trời' },
        // { word: 'boat', spelling: '/boat/', type: 'noun', meaning: 'thuyền, con thuyền' },
        // { word: 'bath', spelling: '/bath/', type: 'noun', meaning: 'bồn tắm, việc tắm rửa' },
        // { word: 'friday', spelling: '/fraidei/', type: 'noun', meaning: 'thứ Sáu' },
        // { word: 'january', spelling: '/january/', type: 'noun', meaning: 'tháng Một, tháng giêng' },
        // { word: 'sunday', spelling: '/sundei/', type: 'noun', meaning: 'chủ nhật' },
        // { word: 'september', spelling: '/september/', type: 'noun', meaning: 'tháng Chín, tháng 9 dsa dsas sa sag dew fsdv' }

    ]
};
export default function Lesson({ route, navigation }) {
    return (
        <View style={lesson.container}>
            <View style={lesson.header}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={lesson.icon}
                            source={require('../../assets/Image/icon-back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={lesson.text}>{route.params.lessonName}</Text>
                    <Text style={lesson.text}>Luyện tập</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Image
                        style={lesson.icon}
                        source={require('../../assets/Image/speaker-lesson.png')}
                    />
                </View>
            </View>

            <View style={lesson.content}>
                <ScrollView>
                    {
                        data.listDoubleWord.map((item, index) => (
                            <View style={{ flex: 1, flexDirection: 'row' }} key={index}>
                                <View style={{ flex: 1 }}>
                                    <WordTag
                                        route={route}
                                        navigation={navigation}
                                        word={item.word1.word}
                                        spelling={item.word1.spelling}
                                        type={item.word1.type}
                                        meaning={item.word1.meaning}
                                        title='1/15'
                                    />
                                </View>
                                <View style={{ flex: 1 }} key={index}>
                                    <WordTag
                                        route={route}
                                        navigation={navigation}
                                        word={item.word2.word}
                                        spelling={item.word2.spelling}
                                        type={item.word2.type}
                                        meaning={item.word2.meaning}
                                        title='1/15'
                                    />
                                </View>
                            </View>

                        ))
                    }
                </ScrollView>
            </View>

            <TouchableOpacity
                style={lesson.footer}
                onPress={() => navigation.navigate('WordDetail', {
                    word: 'wednesday',
                    spelling: '/wenzdei/',
                    type: 'noun',
                    meaning: 'Thứ tư, thứ 4',
                    title: '1/15',
                    route: { route },
                    navigation: { navigation }
                })}
            >
                <Text style={lesson.text}>HỌC NGAY</Text>
                <Image
                    style={lesson.icon}
                    source={require('../../assets/Image/double-arrow-right.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

let lesson = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        paddingHorizontal: 10,
    },
    content: {
        flex: 10
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
        flexDirection: "row"
    },
    footerText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
    },
    icon: {
        width: 32,
        height: 32,
        marginHorizontal: 10
    }
});
