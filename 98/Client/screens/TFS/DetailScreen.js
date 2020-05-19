import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import config from '../../components/config';

export default function DetailScreen(props) {
    const { title, image, content } = props.route.params;
    return (
        <View style={styles.container}>

            <Text style={styles.title} >{title}</Text>

            <Image style={styles.image} source={{ uri: config.IP_SEVER + image }} />

            <View style={styles.topic} >
                <Text>Loại biển báo:</Text>
                <Text style={styles.content_title} >.....category</Text>
            </View>

            <View style={styles.topic} >
                <Text>Số hiệu:</Text>
                <Text style={styles.content_number} >......</Text>
            </View>

            <View style={{ marginLeft: 10, }}>
                <Text>Mô tả:</Text>
                <Text style={styles.content_detail} >{content}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
    },
    topic: {
        height: 30,
        flexDirection: 'row',
        marginLeft: 10,
    },

    content_title: {
        color: '#1e90ff',
        marginLeft: 8,
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
        resizeMode: "contain",
        margin: 10,
    },
});