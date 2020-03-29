import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}