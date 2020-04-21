import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { StyleSheet, Dimensions } from "react-native"
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

export class Dethi extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.cell}
                    source={require('../images/lam_bai.jpg')}
                />
                <Text style={styles.textCau}> {this.props.progress} </Text>
                <Text style={styles.textDe}> {this.props.de} </Text>
            </TouchableOpacity>
        )
    }
}

export function Thi_sat_hach() {
    return (
        <View style={styles.container}>
            <View style={styles.top}></View>

            <View style={styles.row}>

                <Dethi progress='0/20 câu' de='Đề số 1' />
                <Dethi progress='0/20 câu' de='Đề số 2' />
                <Dethi progress='0/20 câu' de='Đề số 3' />

            </View>

            <View style={styles.row}>
                <TouchableOpacity>
                    <Image style={styles.cell}
                        source={require('../images/lam_bai.jpg')}
                    />
                    <Text style={styles.textCau}> 0/20 câu </Text>
                    <Text style={styles.textDe}> Đề số 4 </Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image style={styles.cell}
                        source={require('../images/lam_bai.jpg')}
                    />
                    <Text style={styles.textCau}> 0/20 câu </Text>
                    <Text style={styles.textDe}> Đề số 5 </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.cell}
                        source={require('../images/lam_bai.jpg')}
                    />
                    <Text style={styles.textCau}> 0/20 câu </Text>
                    <Text style={styles.textDe}> Đề số 6 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity>
                    <Image style={styles.cell}
                        source={require('../images/lam_bai.jpg')}
                    />
                    <Text style={styles.textCau}> 0/20 câu </Text>
                    <Text style={styles.textDe}> Đề số 7 </Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image style={styles.cell}
                        source={require('../images/lam_bai.jpg')}
                    />
                    <Text style={styles.textCau}> 0/20 câu </Text>
                    <Text style={styles.textDe}> Đề số 8 </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.cell}
                        source={require('../images/lam_bai.jpg')}
                    />
                    <Text style={styles.textCau}> 0/20 câu </Text>
                    <Text style={styles.textDe}> Đề số 9 </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { height, width } = Dimensions.get('window');
const row = width / 3;
const RowHeight = 90 / 100 * row;
const TopHeight = 10 / 100 * row;
const BotTextCau = 25 / 100 * row;
const BotTextDe = 10.5 / 100 * row;
const ImageSize = 90 / 100 * row;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    top: {
        height: TopHeight,
    },

    row: {
        height: RowHeight,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    cell: {
        width: ImageSize,
        height: ImageSize,
        borderRadius: 111,
        position: "relative",
    },

    textCau: {
        position: "absolute",
        alignSelf: "center",
        bottom: BotTextCau,
        fontSize: 10,

    },

    textDe: {
        position: "absolute",
        alignSelf: "center",
        bottom: BotTextDe,
        fontSize: 14,
        fontWeight: "bold",
    }

})