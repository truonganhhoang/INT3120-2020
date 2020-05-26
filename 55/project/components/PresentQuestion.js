import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

class PresentQuestion extends React.Component {

    // onAdd() {
    //     this.props.dispatch({ type = 'add' })
    // }


    render() {
        return (
            <View style={styles.present}>
                <TouchableOpacity>
                    <Image
                        style={styles.arrow}
                        source={require("../images/arrow/left_arrow.png")}
                    />
                </TouchableOpacity>

                <Text style={styles.presentNumber}>
                    {"Câu " + this.props.number + "/" + this.props.total}
                </Text>

                <TouchableOpacity onPress={this.props.next}>
                    <Image
                        style={styles.arrow}
                        source={require("../images/arrow/right_arrow.png")}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default PresentQuestion;

const styles = StyleSheet.create({

    present: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    presentNumber: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 50,
    }
})