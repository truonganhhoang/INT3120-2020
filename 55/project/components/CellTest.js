import * as React from 'react';
import { Image, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class CellTest extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.cell}
                onPress={this.props.on_Press} >

                <Image style={styles.image}
                    source={require('../images/lam_bai.jpg')} />

                <Text style={styles.textCau}> {this.props.progress} </Text>
                <Text style={styles.textDe}> {this.props.de} </Text>

            </TouchableOpacity>
        )
    }
}


const { width } = Dimensions.get('window');
const CellWidth = width / 3;
const BotTextCau = 23 / 100 * CellWidth;
const BotTextDe = 10 / 100 * CellWidth;
const ImageSize = 90 / 100 * CellWidth;

const styles = StyleSheet.create({
    cell: {
        width: CellWidth,
        height: CellWidth,
        marginTop: 10,
        borderRadius: 111,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: ImageSize,
        height: ImageSize,
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