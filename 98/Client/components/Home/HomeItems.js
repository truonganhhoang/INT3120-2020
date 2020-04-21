﻿import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DATA = [
    {
        id: '1',
        title: 'Ôn tập câu hỏi',
        content: 'Danh sách 450 câu hỏi được chia dựa theo các phần học trong sách lý thuyết xe hạng B2.',
        button: 'ÔN LUYỆN',
        iconName: 'feather',
        iconColor: '#ff0000',
        route:"QuestionPractice",
    },
   
    {
        id: '2',
        title: 'Video hướng dẫn',
        content: 'Tổng hợp tất cả video hướng dẫn làm bài thi.',
        button: 'Xem video',
        iconName: 'video',
        iconColor: 'gray',
        route:"MemoryTricks",
    },
    {
        id: '3',
        title: 'Bản đồ',
        content: 'Xem vị trí thi bằng lái xe B2.',
        button: 'XEM BẢN ĐỒ',
        iconName: 'zoom-in',
        iconColor: '#3399ff',
        route: "Map",
    },
    {
        id: '4',
        title: 'Biển báo',
        content: 'Danh sách 116 biển báo bạn hay gặp trong quá trình làm đề.',
        button: 'TÌM HIỂU',
        iconName: 'crosshair',
        iconColor: '#7d26ff',
        route: "TFS",
    },
];


function Item( props) {
    const {route,navigation,iconName,iconColor,title,content,button}=props;
    return (
        <TouchableOpacity 
            style={{ flex: 0.5, backgroundColor: '#fff',  }}
            onPress={ () => navigation.navigate(route)}
        >
            <View style={{ flex: 1, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#ebebe0', padding: 15, }}>
                <View style={{ flexDirection: 'row', }}>
                    <Feather name={iconName} size={45} color={iconColor} style={{ flex: 35 }} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray', flex: 65, }}>{title}</Text>
                </View>

                <View style={{ flex: 1, }}>
                    <Text style={{ fontSize: 15, color: 'gray', marginVertical: 15 }} >{content}</Text>
                </View>

                <View>
                    <View style={{backgroundColor: iconColor, height: 30, width: 120, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{textTransform: "uppercase", color: '#fff', fontWeight: "bold"}}>{button}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default function HomeItem(props) {
const {navigation}=props;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 8, }}>
            <FlatList
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={DATA}
                renderItem={({ item }) => 
                <Item title={item.title} route={item.route} content={item.content} button={item.button} iconName={item.iconName} iconColor={item.iconColor} navigation ={navigation}/>}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        //marginTop: Constants.statusBarHeight,
        paddingLeft: 2,
    },
    item: {
        backgroundColor: '#fff',
        height: 200,
        width: 200,
        marginVertical: 2,
        marginHorizontal: 2,
        elevation: 5,
    },
    item_header: {
        backgroundColor: '#fff',
        height: 50,
        paddingLeft: 8,
        flexDirection: 'row',
        //justifyContent: 'center'
    },
    item_title: {
        fontSize: 20,
        paddingLeft: 5,
        color: '#696969',
        fontWeight: 'bold',
        width: 120,
        //marginTop: 7,
    },
    item_content: {
        color: '#808080',
        fontSize: 15,
        padding: 10,
        marginTop: 5,
        height: 100,
    },
    item_button: {
        color: '#fff',
        fontSize: 12,
        margin: -5,
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 5,
    },
});