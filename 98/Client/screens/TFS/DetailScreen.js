import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import config from '../../components/config';

export default function DetailScreen(props) {
    const { title,image,content } = props.route.params;
    return (
        <View style={styles.container}>

            <Text style={styles.title} >{title}</Text>

            <Image style={styles.image} source={{ uri: config.IP_SEVER+image }} />


            <View>
                <Text>Mô tả:</Text>
                <Text style={styles.content_detail} >{content}
                        </Text>
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