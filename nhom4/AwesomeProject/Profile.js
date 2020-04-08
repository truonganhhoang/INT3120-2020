import * as React from 'react';
import{View,Text} from 'react-native';

export function Profile({route,navigation}){
    const {name}=route.params;
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}