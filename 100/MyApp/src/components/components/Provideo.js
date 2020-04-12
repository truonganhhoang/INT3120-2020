import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Boxlearn from './Boxlearn'

export default function Provideo({ navigation }) {
    return (
        <ScrollView horizontal={true} style={{flexDirection: "row"}} showsHorizontalScrollIndicator={false}>
            <Boxlearn imglink={require('../../img/05.jpg')}/>
            <Boxlearn imglink={require('../../img/04.png')}/>
            <Boxlearn imglink={require('../../img/06.png')}/>
            <Boxlearn imglink={require('../../img/05.jpg')}/>
            <Boxlearn imglink={require('../../img/05.jpg')}/>
        </ScrollView>
    )
}

