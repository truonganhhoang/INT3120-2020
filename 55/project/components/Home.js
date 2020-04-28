import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Category({ navigation }) {
    return (
        <View style={styles.cell}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
            >
                <Image
                    source={require("../images/thi_sat_hach.jpg")}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>

    )
}

export class Cell extends React.Component {
    render() {
        return (
            <View style={styles.cell}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Thi_sat_hach")}>
                    <Image
                        source={require("../images/thi_sat_hach.jpg")}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

function bam({ navigation }) {
    navigation.navigate("Profile");
}

export function Home({ navigation }) {
    //const {navigate} = this.props.navigation;

    return (
        <View style={styles.screen}>
            <View style={styles.image}>
                <Image
                    source={require("../images/qc.jpg")}
                    resizeMode="stretch"
                    style={{ width: "100%", height: "100%" }}
                />
            </View>


            <View style={styles.content}>

                <View style={styles.row}>

                    <View style={styles.cell}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Thi_sat_hach")}>
                            <Image
                                source={require("../images/thi_sat_hach.jpg")}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.cell}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Hoc_li_thuyet")}>
                            <Image
                                source={require("../images/hoc_li_thuyet.jpg")}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.cell}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Hoc_li_thuyet")}>
                            <Image
                                source={require("../images/bien_bao.jpg")}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.cell}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Meo_thi")}>
                            <Image
                                source={require("../images/meo_thi.jpg")}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.cell}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Tra_cuu_luat")}>
                            <Image
                                source={require("../images/tra_cuu_luat.jpg")}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.cell}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Thi_sat_hach")}>
                            <Image
                                source={require("../images/cau_hay_sai.jpg")}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>




            </View>



        </View>

    );

}

const { height, width } = Dimensions.get('window');
const a = 20 / 100 * height;
const b = 43 / 100 * width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    image: {
        flex: 4,
        backgroundColor: "white",
    },

    content: {
        flex: 10,
        borderWidth: 10,
        borderColor: "#EDEDF1",
    },

    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#EDEDF1",
    },

    cell: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },

    icon: {

        width: b,
        height: a,
        borderRadius: 10,
        borderColor: "#ECAB53",
        borderWidth: 3,

        // borderTopRightRadius: 30,
        // borderBottomLeftRadius: 30,
        //  borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
    },

});