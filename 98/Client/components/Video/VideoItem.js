import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

//const windowWidth = Dimensions.get('window').width;

export default function Item(props) {
    const { navigation, title, content, color, name, vid } = props;
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('DetailVideo', { vid: vid });
        }} >
            <View style={styles.item}>
                <View style={{ backgroundColor: color, height: 45, width: 65, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 14, alignItems: 'center' }}>{name}</Text>
                    <View style={{ backgroundColor: 'black', height: 15, width: 35, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 10, }}>1:30</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 10, marginEnd: 65, }}>
                    <Text style={{ fontSize: 15, }}>{title}</Text>
                    <Text style={{ fontSize: 13, color: '#a9a9a9', marginBottom: 10, textAlign: 'justify', }}>{content}</Text>
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
    tinyLogo: {
        backgroundColor: 'blue',
        width: 65,
        height: 50,
    },
});