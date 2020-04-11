import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import config from '../config';

export default function Item(props) {
    const { navigation, title,image,content } = props;

    return (
        <TouchableOpacity onPress={() => { 
            navigation.navigate('Detail', { image: image, title: title, content: content });
            }} >
            <View style={styles.item}>
                <View style={styles.item_header}>
                    <Text style={styles.item_title}>{title}</Text>
                </View>

                <View>
                    <Image
                        source={{ uri: config.IP_SEVER+image }}
                        style={styles.item_image}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

  
const styles = StyleSheet.create({
  
    item: {
        backgroundColor: '#fdf5e6',
        height: 165,
        width: 165,
        margin: 12,
        padding: 5,
        borderRadius: 12,
        elevation: 7,
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
        height: 90,
        justifyContent: 'center',
        resizeMode: 'center',
    },
    tinyLogo: {
        height: 33,
        width: 33,
        marginLeft: 5,
    },
});

