import * as React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { CellSearch } from '../components/CellSearch';
import TabBarOptions from '../style/TabBarOptions';


var dataMoto = [
    {
        id: '1',
        img: require('../images/tracuu/1.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '2',
        img: require('../images/tracuu/2.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '3',
        img: require('../images/tracuu/3.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '4',
        img: require('../images/tracuu/4.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '5',
        img: require('../images/tracuu/5.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '6',
        img: require('../images/tracuu/6.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '7',
        img: require('../images/tracuu/7.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '8',
        img: require('../images/tracuu/8.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '9',
        img: require('../images/tracuu/9.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '10',
        img: require('../images/tracuu/10.jpg'),
        desScreen: 'Anima',
    },
    {
        id: '11',
        img: require('../images/tracuu/11.jpg'),
        desScreen: 'Anima',
    },


]

export class Moto extends React.Component {

    render() {
        const { navigation } = this.props;

        return (
            // <ScrollView style={styles.container}>
            //     <View style={styles.row}>
            //         <CellSearch element={dataMoto[0]} />
            //         <CellSearch element={dataMoto[1]} />
            //         <CellSearch element={dataMoto[2]} />
            //     </View>

            //     <View style={styles.row}>
            //         <CellSearch element={dataMoto[3]} />
            //         <CellSearch element={dataMoto[4]} />
            //         <CellSearch element={dataMoto[5]} />
            //     </View>

            //     <View style={styles.row}>
            //         <CellSearch element={dataMoto[6]} />
            //         <CellSearch element={dataMoto[7]} />
            //         <CellSearch element={dataMoto[8]} />
            //     </View>

            //     <View style={styles.row}>
            //         <CellSearch element={dataMoto[9]} />
            //         <CellSearch element={dataMoto[10]} />
            //     </View>
            // </ScrollView>

            <FlatList style={styles.container}
                data={dataMoto}
                renderItem={({ item, index }) => {
                    return (
                        <CellSearch element={item} onPress={() => navigation.navigate('SearchLawDetail', { type: 0, index: index })} />
                    )
                }}
                numColumns='3'
            >

            </FlatList>
        )
    }
}

export class Car extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <FlatList style={styles.container}
                data={dataMoto}
                renderItem={({ item, index }) => {
                    return (
                        <CellSearch element={item} onPress={() => navigation.navigate('SearchLawDetail', { type: 1, index: index })} />
                    )
                }}
                numColumns='3'
            >

            </FlatList>
        )
    }
}


const Tab = createMaterialTopTabNavigator();

export default function Tra_cuu_luat({ navigation }) {
    return (
        <Tab.Navigator
            tabBarOptions={TabBarOptions}
        >
            <Tab.Screen name='XE MÁY' component={Moto} />
            <Tab.Screen name='Ô TÔ' component={Car} />
        </Tab.Navigator>
    )
}


const { width } = Dimensions.get('window');
const RowHeight = width / 3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    // row: {
    //     height: RowHeight,
    //     marginTop: 10,
    //     flexDirection: "row",
    // },
})