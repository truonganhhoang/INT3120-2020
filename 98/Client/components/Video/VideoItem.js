import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Item(props) {
    const { navigation, title, content, vid } = props;
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', { vid: vid });
        }} >
            <View style={styles.item}>
                <Image style={styles.tinyLogo} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1SxQs9wgEqtGTP5G_IS1NR4-LofYlG2BkcekBKOmIdFRaUe6b&usqp=CAU" }} />
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
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
    },
    text: {
        marginLeft: 10,
    },
    content: {
        fontSize: 14,
        color: '#a9a9a9',
        marginBottom: 10,
    },
    tinyLogo: {
        width: 65,
        height: 50,
    },
});