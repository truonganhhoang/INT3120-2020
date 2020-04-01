﻿import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';



const DATA = [
    {
        id: '1',
        title: 'Ôn tập câu hỏi',
        content: 'Danh sách 450 câu hỏi được chia dựa theo các phần học trong sách lý thuyết xe hạng B2.',
        button: 'ÔN LUYỆN',
        image:require('../../assets/images/home/ontap.jpg'),
        route:"Link",
    },
   
    {
        id: '2',
        title: 'Mẹo ghi nhớ',
        content: 'Tổng hợp tất cả mẹo làm nhanh bài thi cho 450 câu hỏi.',
        button: 'MẸO LÀM ĐỀ',
        image:require('../../assets/images/home/meoghinho.jpg'),
         route:"TFS",
    },
    {
        id: '3',
        title: 'Xem câu bị sai',
        content: 'Danh sách các câu hỏi thường trả lời sai trong quá trình làm đề.',
        button: 'XEM LẠI',
        image: require('../../assets/images/home/xemlai.jpg'),
        route: "TFS",
    },
    {
        id: '4',
        title: 'Danh sách biển báo',
        content: 'Danh sách 116 biển báo bạn hay gặp trong quá trình làm đề.',
        button: 'TÌM HIỂU',
        image: require('../../assets/images/home/tfsImage.jpg'),
        route: "TFS",
    },
];


function Item( props) {
    const {route,navigation,image,title,content,button}=props;
    return (
        
        <TouchableOpacity   onPress={() =>  navigation.navigate(route)}  >
         
            <View style={styles.item}>
                <View style={styles.item_header}>
                    <Image style={styles.image} source={image} />
                    <Text style={styles.item_title}>{title}</Text>
                </View>

                <Text style={styles.item_content}>{content}</Text>

                <View style={{ width: '60%', paddingLeft: 10 }}>
                    <Button
                        title={button}
                        type="solid"
                        backgroundColor='#fff'
                        titleStyle={styles.item_button}
                          onPress={() => navigation.navigate(route)}
                    />
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default function HomeItem(props) {
const {navigation}=props;

    return (
        <SafeAreaView style={styles.container}>
     
            <FlatList
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={DATA}
                renderItem={({ item }) => 
                <Item title={item.title} route={item.route} content={item.content} button={item.button} image={item.image} navigation ={navigation}/>}
            />
        </SafeAreaView>
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