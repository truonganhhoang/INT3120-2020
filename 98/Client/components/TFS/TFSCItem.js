import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import config from '../config';


export default function Item(props) {
    const { route, image, title, navigation } = props;
    return (

        <TouchableOpacity onPress={() => {
            navigation.navigate('TFSL', { route: route, image: image, title: title });
        }} >
            <View style={styles.item}>
                <Image style={styles.tinyLogo} source={{ uri: config.IP_SEVER + image }} />
                <Text style={styles.item_title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        elevation: 1.6,
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },

    item_title: {
        color: '#696969',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
    },
});