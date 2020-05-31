import * as React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class CellHome extends React.Component {
    render() {
        return (
            // <Text> huhu </Text>
            <View style={styles.cell}>
                <TouchableOpacity
                    onPress={this.props.Press}
                >

                    <Image
                        resizeMode="stretch"
                        source={this.props.img}
                        style={styles.icon}
                    />

                </TouchableOpacity>
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window');
const a = 20 / 100 * height;
const b = 45 / 100 * width;

const styles = StyleSheet.create({

    cell: {
        // width: b,
        // height: a,
        flex: 1,

        // borderColor: "#ECAB53",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: "blue",
        // borderWidth: 1,


        // shadowRadius: 16.00,
        // shadowColor: "red",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },

    icon: {
        width: b,
        height: a,
        borderRadius: 10,

        // borderTopRightRadius: 60,
        // borderBottomLeftRadius: 60,
        // shadowColor: "red",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,

    },

});