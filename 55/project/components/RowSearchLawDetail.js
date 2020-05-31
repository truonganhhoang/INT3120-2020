import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RowSearchLawDetail extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.name}>
                        {'->  ' + this.props.element.name}
                    </Text>

                    <Text style={styles.penanty}>
                        {this.props.element.penanty}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        marginTop: 5,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },

    name: {
        // fontWeight: "bold",
        fontSize: 17,
        margin: 10,
    },

    penanty: {
        color: "red",
        margin: 10,
        marginTop: 0,
        marginLeft: 35,
    }
})