import { View, StyleSheet, ScrollView, Image } from 'react-native'
import React, { Component } from 'react';

class SliderHome extends Component {
    render() {
        return (
            <View style={localStyles.slider}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image style={localStyles.img} source={require('../../img/01.jpg')} />
                <Image style={localStyles.img} source={require('../../img/02.jpg')}/>
                <Image style={localStyles.img} source={require('../../img/03.jpg')}/>
                {/* <Image source={require('../../img/04.jpg')} /> */}
            </ScrollView>
        </View>
        );
    }
}

export default SliderHome;
const localStyles = StyleSheet.create({
    slider: {
        marginTop: 20,
        width: "100%",
        height: 230,
        // flexDirection: "row"
    },
    img: {
        width: 320,
        height: 220,
        borderRadius: 12,
        marginHorizontal: 10,
    }
});