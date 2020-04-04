import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import { TrafficSignData } from '../../assets/data/TrafficSignData';

function Item(props) {
    const { navigation, title, sourceImage } = props;

    return (
        <TouchableOpacity onPress={() => { alert('Hello!') }} >
            <View style={styles.item}>
                <View style={styles.item_header}>
                    <Text style={styles.item_title}>{title}</Text>
                </View>

                <View>
                    <Image
                        source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51SamzvzhPL._SY450_.jpg' }}
                        style={styles.item_image}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function TrafficSignList(props) {

    const { navigation } = props;

    return (
        <SafeAreaView>
            <View>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Text style={styles.head_content}>Loại biển báo: </Text>
                    </View>

                    <View style={styles.select_items}>
                        <Image style={styles.tinyLogo} source={ require('../../assets/images/home/biendo.jpg')} /> 
                        <Text style={styles.select_items_title} > Biển cấm </Text> 
                    </View>

                </View>

                <View style={styles.detail}>
                    <Text style={styles.detail_text}>Nhấn vào từng biển báo để xem chi tiết</Text>
                </View>
            </View>

            <FlatList
                horizontal={false}
                numColumns={2}
                data={TrafficSignData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <Item title={item.title} image={item.sourceImage} navigation={navigation} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1.5,
        borderColor: '#808080',
        //marginTop: 50,
    },
    head: {
        height: 35,
        //borderTopWidth: 0.7,
        //borderColor: '#dcdcdc',
        justifyContent: 'center',
    },
    head_content: {
        color: '#808080',
        marginLeft: 8,
    },
    select_items: {
        height: 50,
        borderColor: '#dcdcdc',
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 7,
        borderWidth: 0.8,
        marginBottom: -0.3,
        alignItems: 'center',
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    select_items_title: {
        fontSize: 18,
        color: '#696969',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    detail: {
        height: 50,
        justifyContent: 'center',
        //alignContent: 'center',
    },
    detail_text: {
        color: '#808080',
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#dcdcdc',
        height: 185,
        width: 185,
        margin: 8,
        padding: 5,
        borderRadius: 12,
        elevation: 10,
    },
    item_header: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 5,
    },
    item_title: {
        color: '#696969',
        //margin: 24,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item_image: {
        marginTop: 10,
        height: 100,
        justifyContent: 'center',
        resizeMode: 'center',
    },
    tinyLogo: {
        height: 33,
        width: 33,
        marginLeft: 5,
    },
});

