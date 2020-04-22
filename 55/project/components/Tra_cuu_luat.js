import * as React from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Cell extends React.Component {
    render(){
        return(
            <View style={styles.cell}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={require('../images/chuyen_huong.jpg')}
                    />
                </TouchableOpacity>
            </View>
                
        )
    }
}

export class Moto extends React.Component{
    render(){
        return (
            <View style={styles.moto}>
                <View style={styles.row}>
                    <Cell />
                    <Cell />
                    <Cell />
                </View>
                <View style={styles.row}>
                    <Cell />
                    <Cell />
                    <Cell />
                </View>
                <View style={styles.row}>
                    <Cell />
                    <Cell />
                    <Cell />
                </View>
                <View style={styles.row}>
                    <Cell />
                    <Cell />
                    
                </View>
            </View>
        )
    }
}

export function Tra_cuu_luat(){
    return(
        <View style={styles.container}>
            <Moto />
        </View>
    )
}


const {height, width} = Dimensions.get('window');
const CellHeight = 100;
const CellWidth = width/3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    moto: {
        backgroundColor: "#F5F5F5",
    },

    row: {
        height: 150,
        
        marginTop: 10,
        backgroundColor: "#ccc",
        flexDirection: "row",
    },

    cell: {
        flex: 1,
    },

    image: {
        height: 150,
        width: CellWidth,
    }
})