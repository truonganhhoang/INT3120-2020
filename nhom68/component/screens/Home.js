import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text onPress={()=>{ navigation.navigate('About')}}>
                 Home Screen
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
export default Home;