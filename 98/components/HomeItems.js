import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'Ôn tập câu hỏi',
        content: 'Danh sách 450 câu hỏi được chia dựa theo các phần học trong sách lý thuyết xe hạng B2.',
        button: 'ÔN LUYỆN',
    },
    {
        id: '2',
        title: 'Mẹo ghi nhớ',
        content: 'Tổng hợp tất cả mẹo làm nhanh bài thi cho 450 câu hỏi.',
        button: 'MẸO LÀM ĐỀ',
    },
    {
        id: '3',
        title: 'Xem câu bị sai',
        content: 'Danh sách các câu hỏi thường trả lời sai trong quá trình làm đề.',
        button: 'XEM LẠI',
    },
    {
        id: '4',
        title: 'Biển báo',
        content: 'Danh sách 116 biển báo bạn hay gặp trong quá trình làm đề.',
        button: 'TÌM HIỂU',
    },
];


function Item({ title, content, button }) {
    return (
        <TouchableOpacity >
            <View style={styles.item}>
                <View style={styles.item_header}>
                    <Text style={styles.item_title}>{title}</Text>
                </View>

                <Text style={styles.item_content}>{content}</Text>

                <View style={{ width: '60%', paddingLeft: 10 }}>
                    <Button
                        title={button}
                        type="solid"
                        backgroundColor='#fff'
                        titleStyle={styles.item_button}
                        onPress={() => { alert('Đang không biết chuyển sao qua screen Biển báo :('); }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default function HomeItem({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} content={item.content} button={item.button} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: Constants.statusBarHeight,
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
    },
    item_title: {
        fontSize: 20,
        paddingLeft: 80,
        color: '#696969',
        fontWeight: 'bold',
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
    }
});
