import React from 'react';
import {
  Image,
  Text
} from 'react-native';
import { Body,View } from 'native-base';
import AppStyle from '../them';

export default BoxSelect=(props)=>{
    return(
        <View style={AppStyle.StyleCommon.ColSelect}>
            <Body>
            <Image source={props.srcImage} style={AppStyle.StyleCommon.IconSelect} />
            </Body>
            <Body>
                <Text style={{ color: '#fff', fontSize: 22 }}>{props.text}</Text>
            </Body>
        </View>
    )
}