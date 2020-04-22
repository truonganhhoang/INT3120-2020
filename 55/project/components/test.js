import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function test({navigation}){
    return(

        <View>
            <View style={{ width: 150, height: 150, backgroundColor: "gray", justifyContent: "center", alignItems: "center", position: "relative",}}>
                <View style={{
                    
                    position: "absolute",
                    top: 20,
                    left: 20,
                    right: 20,
                    bottom: 20,
                    backgroundColor: "blue"}}>
                    
                </View>
            </View>
        </View>
    );
}