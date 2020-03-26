import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function About({navigation}){
    return(
        <View style={styles.container} >
            <Text onPress={()=>{ navigation.navigate('Home')}}> About Screen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    justifyContent: 'center',
    }
})
export default About;