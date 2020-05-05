import * as React from 'react';
import { Text, View, Dimensions, Image, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

var src = {
    img1: require('../images/tracuu/1.jpg'),
    img2: require('../images/tracuu/2.jpg'),
    img3: require('../images/tracuu/3.jpg'),
    img4: require('../images/tracuu/4.jpg'),
    img5: require('../images/tracuu/5.jpg'),
    img6: require('../images/tracuu/6.jpg'),
    img7: require('../images/tracuu/7.jpg'),
    img8: require('../images/tracuu/8.jpg'),
    img9: require('../images/tracuu/9.jpg'),
    img10: require('../images/tracuu/10.jpg'),
    img11: require('../images/tracuu/11.jpg'),
}

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
        id: '9',
        img: require('../images/tracuu/10.jpg'),
        desScreen: 'Anima',
    },


]

// function GoToButton({ screenName }) {
//     const navigation = useNavigation();

//     return (
//         <Button
//             title={`Go to ${screenName}`}
//             onPress={() => navigation.navigate(screenName)}
//         />
//     );
// }

export class Cell extends React.Component {

    constructor(props) {
        super(props);
        // const navigation = useNavigation();
    }

    GoToButton = ({ navigation, screenName }) => {
        // const navigation = useNavigation();
        navigation.navigate(screenName);
    }

    render() {
        // var nguon = '../images/tracuu/' + this.props.stt.uio + '.jpg';
        // Alert.alert(nguon);
        return (
            <View style={styles.cell}>
                <TouchableOpacity onPress={this.GoToButton(this.props.element.desScreen)}>
                    <Image style={styles.image}
                        source={this.props.element.img}
                        resizeMode="stretch"
                    />
                </TouchableOpacity>
            </View>

        )
    }
}

export class Moto extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <Cell element={dataMoto[0]} />
                    <Cell element={dataMoto[1]} />
                    <Cell element={dataMoto[2]} />
                </View>
                <View style={styles.row}>
                    <Cell element={dataMoto[3]} />
                    <Cell element={dataMoto[4]} />
                    <Cell element={dataMoto[5]} />
                </View>
                <View style={styles.row}>
                    <Cell element={dataMoto[6]} />
                    <Cell element={dataMoto[7]} />
                    <Cell element={dataMoto[8]} />
                </View>
                <View style={styles.row}>
                    <Cell element={dataMoto[9]} />
                    <Cell element={dataMoto[10]} />

                </View>
            </ScrollView>
        )
    }
}

export class Car extends React.Component {
    render() {
        return (
            <Text> hhhuhuhuhuh ôt ne </Text>
            // <ScrollView style={styles.container}>
            //     <View style={styles.row}>
            //         <Cell img={src.img1} />
            //         <Cell img={src.img2} />
            //         <Cell img={src.img3} />
            //     </View>
            //     <View style={styles.row}>
            //         <Cell img={src.img4} />
            //         <Cell img={src.img5} />
            //         <Cell img={src.img6} />
            //     </View>
            //     <View style={styles.row}>
            //         <Cell img={src.img7} />
            //         <Cell img={src.img8} />
            //         <Cell img={src.img9} />
            //     </View>
            //     <View style={styles.row}>
            //         <Cell img={src.img10} />
            //         <Cell img={src.img11} />

            //     </View>
            // </ScrollView>
        )
    }
}


const Tab = createMaterialTopTabNavigator();

export function Tra_cuu_luat() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: "#66BB6A",
                },
            }}>

            <Tab.Screen name='XE MÁY' component={Moto} />
            <Tab.Screen name='Ô TÔ' component={Car} />
        </Tab.Navigator>
    )
}


const { height, width } = Dimensions.get('window');
const RowHeight = width / 3;
const ImageSize = width / 3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    row: {
        height: RowHeight,
        marginTop: 10,
        flexDirection: "row",
    },

    cell: {
        // flex: 1,
        backgroundColor: "#8FBC8F",
        borderRadius: 10,
    },

    image: {
        height: ImageSize,
        width: ImageSize,
    }
})