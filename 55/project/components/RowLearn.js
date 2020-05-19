import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { StyleSheet, Dimensions, ProgressBarAndroid } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';

export class RowLearn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pass: 0
        }
    }

    add = () => {
        this.setState({ pass: this.state.pass + 1 })
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.Press}>
                <View style={styles.row}>

                    <View styles={styles.left}>

                        <View style={styles.inleft}>

                            <Image style={styles.image}
                                source={this.props.element.img} />

                        </View>

                    </View>

                    <View style={styles.right}>

                        <Text style={styles.tit}>
                            {this.props.element.name}
                        </Text>

                        <Text style={styles.socau}>
                            {this.props.element.number + " câu"}
                        </Text>

                        <Text style={styles.pass}>
                            {this.state.pass + "/" + this.props.element.number}
                        </Text>

                        <ProgressBarAndroid style={styles.progress}
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={this.state.pass / this.props.element.number}
                            color={"#66BB6A"}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const { height, width } = Dimensions.get('window');
const RowHeight = 90 / 810 * height;
const ImageSize = 70 / 410 * width;
const ProgressWidth = 230 / 410 * width;

const styles = StyleSheet.create({
    row: {
        height: 90,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 7,
        flexDirection: "row",
    },

    left: {
        flex: 2,
    },

    right: {
        flex: 4,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        justifyContent: "space-around"
    },

    inleft: {
        width: RowHeight,
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: ImageSize,
        height: ImageSize,
    },

    tit: {
        fontSize: 16,
        marginTop: 10,
    },

    socau: {
        fontSize: 12,
        opacity: 0.5,
    },

    progress: {
        width: ProgressWidth,
        marginBottom: 10,
    },

    pass: {
        fontSize: 13,
        position: "absolute",
        right: 17,
        bottom: 17,
        color: "#FF9933",
    }

})