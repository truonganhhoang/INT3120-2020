import * as React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class RowBoard extends React.Component {

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.row}>

                    <View style={styles.left}>
                        <Image
                            style={styles.image}
                            // source={this.props.element.img}
                            source={this.props.element.img}
                        />
                    </View>


                    <View style={styles.right}>
                        <Text style={styles.name}>
                            {this.props.element.name}
                        </Text>

                        <Text style={styles.text}>
                            {this.props.element.text}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}


const { width } = Dimensions.get('window');
const LeftWidth = 120 / 410 * width;
const RightWidth = width - LeftWidth;
const ImageSize = 90 / 120 * LeftWidth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },

    row: {
        flexDirection: "row",
        backgroundColor: "white",
        borderColor: "#ccc",
        borderTopColor: "#eee",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    left: {
        width: LeftWidth,
        justifyContent: "center",
        alignItems: "center",
    },

    right: {
        width: RightWidth,
    },

    image: {
        width: ImageSize,
        height: ImageSize,
        margin: 10,
    },

    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
    },

    text: {
        color: "#B7B7B7",
        marginRight: 10,
        marginBottom: 5,
    }
})