import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function Item(props) {
    const { navigation, title, content, vid } = props;
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', { vid: vid });
        }} >
            <View style={styles.item}>
                <Image style={styles.tinyLogo} source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }} />
                <View style={styles.text}>
                    <Text style={{ fontSize: 15, }}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginRight: 5,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
    },
    text: {
        margin: 5,
        marginLeft: 10,
    },
    content: {
        fontSize: 13,
        color: '#a9a9a9'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 5,
        marginLeft: 10,
    },
});