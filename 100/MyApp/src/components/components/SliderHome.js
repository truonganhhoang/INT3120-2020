import { View, StyleSheet, ScrollView, Image } from 'react-native'
import React, { Component } from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
class SliderHome extends Component {
    render() {
        return (
            <View style={localStyles.slider}>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={1}
                showPagination
                autoplayInvertDirection={true}
                paginationStyleItem={
                   { width: 350,
                    height: 240,}
                }
            >
                <Image style={localStyles.img} source={require('../../img/01.jpg')}/>
                <Image style={localStyles.img} source={require('../../img/02.jpg')}/>
                <Image style={localStyles.img} source={require('../../img/03.jpg')}/>
                {/* <Image source={require('../../img/04.jpg')} /> */}
            </SwiperFlatList>
        </View>
        );
    }
}
function Slider() {
    return(
        <View>
            <Image style={localStyles.img} source={require('../../img/01.jpg')}/>
                <Image style={localStyles.img} source={require('../../img/02.jpg')}/>
                <Image style={localStyles.img} source={require('../../img/03.jpg')}/>
        </View>
    );
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