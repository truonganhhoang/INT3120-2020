import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native';
import { Header } from 'react-native-elements';
import HomeItems from '../components/HomeItems';

const screenWidth = Math.round(Dimensions.get('window').width);

export default function Home({ navigation }) {
    return (
        <View>
            <Header
                centerComponent={{ text: 'ÔN LUYỆN BẰNG B2', style: { color: '#fff' } }}
                rightComponent={{ icon: 'person', color: '#fff' }}
            />
            <View>
                <Image style={styles.img} source={require('../assets/images/menu.jpg')} />               
            </View>
            <HomeItems />
            
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: screenWidth,
        height: 200,
        resizeMode: 'cover',
    }
});


