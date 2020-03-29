import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default function TrafficSignHead() {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.head_content}>Chọn loại biển báo: </Text>
                </View>

                <View style={styles.select_items}>
                    <Text style={styles.select_items_title} > Biển cấm </Text>
                    <Icon name='chevron-down' type='octicon' />
                </View>

            </View>

            <View style={styles.detail}>
                <Text style={styles.detail_text}>Nhấn vào từng biển báo để xem chi tiết</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1.5,
        borderColor: '#808080',
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
        justifyContent: 'space-between'
    },
    select_items_title: {
        fontSize: 18,
        color: '#696969',
        marginLeft: 50,
        fontWeight: 'bold',
    },
    img: {
        width: 20,
        height: 20,
        alignItems: 'center',
    },
    detail: {
        height: 50,
        justifyContent: 'center',
        //alignContent: 'center',
    },
    detail_text: {
        color: '#808080',
        textAlign: 'center',
    }
});