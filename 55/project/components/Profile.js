import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export function Profile({ route, navigation}) {
    const { age }   = route.params;
    const { name } = route.params;

        return(
            <View>
                <Text> Profile SCREEN của bé {name} {age} nè a </Text>
                <Text> Profile SCREEN </Text>
                <Text> Profile SCREEN </Text>
            </View>

        );
}