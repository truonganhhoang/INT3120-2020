import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';

import TrafficSignList from '../components/TrafficSignList';
import TrafficSignHead from '../components/TrafficSignHead';

export default function TrafficSigns({ navigation }) {
    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.goBack() }}
                centerComponent={{ text: 'BIỂN BÁO', style: { color: '#fff' } }}
                rightComponent={{}}
            />

            <TrafficSignHead />

            <TrafficSignList />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    content_title: {
        height: 35,
        borderWidth: 0.7,
        borderColor: '#dcdcdc',
        justifyContent: 'center',
    },
    content_text: {
        color: '#808080',
        marginLeft: 8,
    },
});

