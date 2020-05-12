import * as React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class PresentQuestion extends React.Component {
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
                    {"Câu " + this.props.number + "/75"}
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

export class Answer extends React.Component {
    render() {
        return (
            <View style={styles.answer}>

                <View style={styles.left}>
                    <View style={styles.circle}>
                        <Text style={styles.number}>
                            {this.props.number}
                        </Text>
                    </View>
                </View>



                <Text style={styles.answerText}>
                    {this.props.answer}
                </Text>
            </View>
        )
    }
}

export class Question extends React.Component {
    render() {
        return (

            <Text style={styles.question}>
                {this.props.text}
            </Text>

        )
    }
}


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

    question: {
        fontSize: 16,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 15,
        paddingBottom: 30,
    },

    answer: {
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },

    answerText: {
        fontSize: 15,
        flex: 1,
        marginRight: 10,
    },

    left: {
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    circle: {
        justifyContent: "center",
        alignItems: "center",
        width: 35,
        height: 35,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#aaa",
    },

    number: {
        fontSize: 16,
    },

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