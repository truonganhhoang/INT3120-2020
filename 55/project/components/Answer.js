import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';


class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.KhaiNiem[this.props.questionNumber].answer[this.props.number - 1].opened,
        }
    }

    Toggle = () => {
        this.props.dispatch({ type: 'toggleAnswer', questionNumber: 1, answerNumber: 1 })
    }

    render() {
        let AnswerStyle = [styles.answerText], CircleStyle = [styles.circle], NumberStyle = [styles.number], check = null;

        if (this.state.opened) {
            NumberStyle = [styles.number, styles.numberOpened];

            if (this.props.correct) {
                AnswerStyle = [styles.answerText, styles.answerTextOpenedTrue];
                CircleStyle = [styles.circle, styles.circleOpenedTrue];
                check = <Icon style={{ color: 'green' }} size={30} name='check' />
            }
            else {
                AnswerStyle = [styles.answerText, styles.answerTextOpenedFalse];
                CircleStyle = [styles.circle, styles.circleOpenedFalse];
                check = <Icon style={{ color: "red" }} size={30} name='close' />
            }
        }

        return (
            <TouchableOpacity
            //onPress={this.props.dispatch({ type: 'toggleAnswer', questionNumber: 1, answerNumber: 1 })}
            >
                <View style={styles.answer}>

                    <View style={styles.left}>
                        <View style={CircleStyle}>
                            <Text style={NumberStyle}>
                                {this.props.number}
                            </Text>
                        </View>
                    </View>


                    <Text style={AnswerStyle}>
                        {this.props.answer}
                    </Text>

                    <View style={styles.right}>
                        {check}
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state) {
    return { KhaiNiem: state.KhaiNiem }
}

export default connect(mapStateToProps)(Answer);

const styles = StyleSheet.create({

    answer: {
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },

    answerText: {
        fontSize: 15,
        flex: 1,
        // marginRight: 10,
    },

    answerTextOpenedTrue: {
        color: "green",
    },

    answerTextOpenedFalse: {
        color: "#EE534F",
    },

    left: {
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    right: {
        width: 40,
        alignItems: "center",
    },

    circle: {
        justifyContent: "center",
        alignItems: "center",
        width: 37,
        height: 37,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#aaa",
    },

    circleOpenedTrue: {
        backgroundColor: "#66BB6A",
        borderColor: "#66BB6A",
    },

    circleOpenedFalse: {
        backgroundColor: "#EE534F",
        borderColor: "#EE534F",
    },

    number: {
        fontSize: 16,
    },

    numberOpened: {
        color: "#fff",
    },
})