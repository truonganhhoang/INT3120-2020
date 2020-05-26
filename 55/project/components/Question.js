import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

export default class Question extends React.Component {
    render() {
        return (

            <Text style={styles.question}>
                {this.props.text}
            </Text>

        )
    }
}


// const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

    question: {
        fontSize: 16,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 15,
        paddingBottom: 20,
    },
})