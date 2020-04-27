import * as React from 'react';
import { View, Image, Text, Animated, Alert, } from 'react-native';
import { StyleSheet, Dimensions } from "react-native"
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Easing } from 'react-native-reanimated';
// import { dataMeo } from '../data/meoLT';

var dataMeo = [
    "\t\tKhái niệm và quy tắc nè    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa🍕🍕\nKhái niệm và quy tắc nè 🍕🍕\nKhái niệm và quy tắc nè 🍕🍕\nKhái niệm và quy tắc nè 🍕🍕\nKhái niệm và quy tắc nè 🍕🍕\n",
    "Nghiệp vụ vận tải nè 🍕🍕",
    "Kỹ thuật lái xe nè 🍕🍕",
    "Cấu tạo và sửa chữa nè 🍕🍕",
    "Hệ thống biển báo nè 🍕🍕",
    "Sa hình nè 🍕🍕"
]

var dataLiThuyet = [
    {
        id: "1",
        name: "Khái niệm và quy tắc",
        text: "Khái niệm và quy tắc nè\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nâsas\nhihihihihih"
    },
    {
        id: "2",
        name: "Nghiệp vụ vận tải",
        text: "Nghiệp vụ vận tải nè\n jijijiji"
    },
    {
        id: "3",
        name: "Kỹ thuật lái xe",
        text: "Nghiệp vụ vận tải nè"
    },
    {
        id: "4",
        name: "Cấu tạo và sửa chữa",
        text: "Nghiệp vụ vận tải nè"
    },
    {
        id: "5",
        name: "Hệ thống biển báo",
        text: "Nghiệp vụ vận tải nè"
    },
    {
        id: "6",
        name: "Sa hình",
        text: "Nghiệp vụ vận tải nè"
    }
]

export class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xoay: new Animated.Value(0),
            opened: true,
            texth: new Animated.Value(0),
            maxHeight: 0,
        }
    }


    Toggle = () => {
        var desArrow = this.state.opened ? 0 : 180;
        var desText = this.state.opened ? 0 : 200;

        Alert.alert(this.state.maxHeight.toString());

        const ArrowAni = Animated.timing(                            // Animate over time
            this.state.xoay,                      // The animated value to drive
            {
                toValue: desArrow,
                duration: 200,                        // Animate to opacity: 1, or fully opaque
            }
        );

        // this.state.animation.setValue(initialValue);

        const TextAni = Animated.timing(                            // Animate over time
            this.state.texth,                      // The animated value to drive
            {
                toValue: desText,
                duration: 300,                    // Animate to opacity: 1, or fully opaque
            }
        );

        Animated.parallel([ArrowAni, TextAni]).start();

        this.setState({ opened: !this.state.opened, })
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        const rotate = this.state.xoay.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })

        // var a = <Animated.View style={{ margin: 10, padding: 10, height: this.state.texth }}>  </Animated.View>;

        return (
            <View >
                <TouchableOpacity style={styles.row} onPress={this.Toggle}>
                    <Text style={styles.text}> {this.props.element.name} </Text>

                    <Animated.Image
                        style={[styles.image, { transform: [{ rotate: rotate }] }]}
                        source={require('../images/down_arrow.png')}
                    />
                </TouchableOpacity>



                <Animated.Text style={[styles.drop, { height: this.state.texth }]} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.element.text}
                </Animated.Text>



            </View>

        )
    }
}

const Tab = createMaterialTopTabNavigator();

export function Meo_thi() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                height: 100,
                activeTintColor: "#fff",
                inactiveTintColor: "#ccc",
                renderIndicator: () => <Text> ahuhuh </Text>,

                indicatorStyle: {
                    backgroundColor: "blue",
                },
                indicatorContainerStyle: {
                    backgroundColor: "red",
                    borderRadius: 20,
                },
                tabStyle: {
                    height: 60,
                    backgroundColor: "#66BB6A",
                },
                labelStyle: {
                    fontWeight: 'bold',
                    // backgroundColor: 'green',
                    // paddingHorizontal: 15,
                    // paddingVertical: 5,
                    // borderRadius: 15,
                }
            }}
        >

            <Tab.Screen name='MẸO LÍ THUYẾT' component={Li_thuyet} />
            <Tab.Screen name='MẸO THỰC HÀNH' component={Thuc_hanh} />
        </Tab.Navigator>
    )
}

export function Li_thuyet() {
    // return (
    //     <ScrollView>
    //         <Row name='Khái niệm và quy tắc' stt={1} />
    //         <Row name='Nghiệp vụ vận tải' stt={2} />
    //         <Row name='Kỹ thuật lái xe' stt={3} />
    //         <Row name='Cấu tạo và sửa chữa' stt={4} />
    //         <Row name='Hệ thống biển báo' stt={5} />
    //         <Row name='Sa hình' stt={6} />
    //     </ScrollView>

    // )

    return (
        <FlatList
            data={dataLiThuyet}
            renderItem={({ item }) => {
                return (
                    <Row element={item} />
                )
            }}
        >
        </FlatList>
    )
}

export function Thuc_hanh() {
    return (
        <Text> Thực hành nè </Text>
    )
}

const styles = StyleSheet.create({
    row: {
        height: 80,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },

    text: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
    },

    image: {
        width: 25,
        height: 12,
        marginRight: 15,
    },

    drop: {
        // backgroundColor: "#ccc",
        marginLeft: 10,
        marginRight: 10,
        alignItems: "flex-end",
        paddingLeft: 10,
    }
})