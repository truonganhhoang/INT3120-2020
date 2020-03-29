import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { trafficSignData } from '../assets/data/TrafficSignData';

export default function TrafficSignList({ navigation })  {
    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity /*onPress={() => { console.log({ index }) }} */>
                <View style={styles.item}>
                    <View style={styles.item_header}>
                        <Text style={styles.item_title}>{item.title}</Text>
                    </View>

                    <View>
                        <Image
                            source={{ uri: item.sourceImage }}
                            style={styles.item_image}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (         
        <FlatList
            horizontal={false}
            numColumns={2}
            data={trafficSignData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
        />  
    );
}

const styles = StyleSheet.create({
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
        height: 50,
        width: 50,
        margin: 5,
    },
});

