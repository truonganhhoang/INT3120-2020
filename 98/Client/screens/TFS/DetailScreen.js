import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function DetailScreen() {
    return (
        <View style={styles.container}>

            <Text style={styles.title} >Biển số P.102 "Cấm đi ngược chiều"</Text>

            <Image style={styles.image} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51SamzvzhPL._SY450_.jpg' }} />

            <View style={styles.topic} >
                <Text>Loại biển báo:</Text>
                <Text style={styles.content_title} >Biển cấm</Text>
            </View>

            <View style={styles.topic} >
                <Text>Số hiệu:</Text>
                <Text style={styles.content_number} >P.102</Text>
            </View>

            <View>
                <Text>Mô tả:</Text>
                <Text style={styles.content_detail} >Để báo đường cấm các loại xe (cơ giới và thô sơ) đi vào theo chiều đặt biển,
                        trừ các xe được ưu tiên theo quy định, phải đặt biển số P.102. NGười đi bộ được phép đi trên vỉa hè hoặc lề đường.</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //marginTop: 50,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    topic: {
        height: 30,
        flexDirection: 'row',
    },

    content_title: {
        color: '#1e90ff',
        marginLeft: 5,
    },
    content_number: {
        color: '#ff6347',
        marginLeft: 5,
    },
    content_detail: {
        margin: 8,
        color: '#696969',
    },
    image: {
        height: 150,
        //width: 150,
        justifyContent: 'center',
        resizeMode: 'center',
        margin: 10,
    },
});