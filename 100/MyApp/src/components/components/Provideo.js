import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import BoxLearn from './BoxLearn'
export default function Provideo(props,{navigation}) {
    var image =[
        {
            key: 1,
            href:require('../../img/05.jpg'),
        },
        {
            key: 2,
            href:require('../../img/05.jpg'),
        },
        {
            key: 3,
            href:require('../../img/05.jpg'),
        },
        {
            key: 4,
            href:require('../../img/05.jpg'),
        },
        {
            key: 5,
            href:require('../../img/05.jpg'),
        },
    ]
    return (
        <ScrollView 
            horizontal={true} 
            style={{flexDirection: "row"}} 
            showsHorizontalScrollIndicator={false}
        >
            {
                image.map((value)=>(
                    <TouchableOpacity onPress={props.toDetail} key={value.key}>
                        <BoxLearn imglink={value.href} />
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}