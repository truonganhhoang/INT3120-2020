﻿import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity,Button,Image } from 'react-native';
import Constants from 'expo-constants';


const DATA = [
    {
        id: '1',
        title: 'Ôn tập câu hỏi',
        content: 'Danh sách 450 câu hỏi được chia dựa theo các phần học trong sách lý thuyết xe hạng B2.',
        button: 'ÔN LUYỆN',
        image:require('../../assets/images/home/cauhoiontap.jpg'),
        route:"Link",
    },
   
    {
        id: '2',
        title: 'Biển báo',
        content: 'Danh sách 116 biển báo bạn hay gặp trong quá trình làm đề.',
        button: 'TÌM HIỂU',
        image:require('../../assets/images/home/timhieu.jpg'),
         route:"TFS",
    },
];


function Item( props) {
    const {route,navigation,image,title,content,button}=props;
    return (
        
        <TouchableOpacity   onPress={() =>  navigation.navigate(route)}  >
         
            <View style={styles.item}>
             <View >
                <Image style={styles.image} source={image}/>               
            </View>
                <View style={styles.item_header}>
                    <Text style={styles.item_title}>{title}</Text>
                </View>

                <Text style={styles.item_content}>{content}</Text>

                <View style={{ width: '60%'}}>
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
     
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    item: {
        backgroundColor: '#fff',
        width: 200,
        marginVertical: 2,
        marginHorizontal: 2,
        elevation: 5,
     
    },
    item_header: {
        backgroundColor: '#fff',
        height: 30,
    },
    item_title: {
        fontSize: 15,
        color: '#696969',
        fontWeight: 'bold',
        padding:5,
    },
    item_content: {
        color: '#808080',
           height: 80,
    },
    item_button: {
        color: '#f194ff',
        fontSize: 12,
       
    },
    image:
    {
        
        width:null,
        height:90,
        resizeMode:"cover",
    
    },
});