import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import SliderHome from '../components/SliderHome';
import { Styles } from '../../styles';
import Provideo from '../components/Provideo';
export default class Screen1 extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Header></Header>
                    <SliderHome />
                    <Text style={[Styles.h2text, {marginTop: 5, marginBottom: 8}]}>Khuyến mại</Text>
                    <Provideo />
                    <Text style={[Styles.h2text, {marginTop: 5, marginBottom: 8}]}>Top bán chạy</Text>
                    <Provideo />
                    <Text style={[Styles.h2text, {marginTop: 5, marginBottom: 8}]}>Đánh giá cao</Text>
                    <Provideo />
                    <Text style={[Styles.h2text, {marginTop: 5, marginBottom: 8}]}>Mới nhất</Text>
                    <Provideo />

                </ScrollView>
            </View>
        )
    }
}
