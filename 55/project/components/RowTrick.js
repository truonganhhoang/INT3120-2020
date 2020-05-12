import * as React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class RowTrick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xoay: new Animated.Value(0),
            opened: false,
            textHeight: new Animated.Value(60)
        }
    }


    Toggle = () => {
        var desArrow = this.state.opened ? 0 : 180;
        var desText = this.state.opened ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        const ArrowAni = Animated.timing(                            // Animate over time
            this.state.xoay,                      // The animated value to drive
            {
                toValue: desArrow,
                duration: 300,
            }
        );

        const TextAni = Animated.spring(                            // Animate over time
            this.state.textHeight,                      // The animated value to drive
            {
                toValue: desText,
                // duration: 500,
            }
        );

        Animated.parallel([ArrowAni, TextAni]).start();

        this.setState({ opened: !this.state.opened, })
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        const rotate = this.state.xoay.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })

        return (
            <Animated.View style={[styles.container, { height: this.state.textHeight }]}>

                <View onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity style={styles.row} onPress={this.Toggle}>
                        <Text style={styles.text}>
                            {this.props.element.name}
                        </Text>

                        <Animated.Image
                            style={[styles.image, { transform: [{ rotate: rotate }] }]}
                            source={require('../images/arrow/down_arrow.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={[styles.drop]} onLayout={this._setMaxHeight.bind(this)} >
                    <Text style={styles.textDrop}>
                        {this.props.element.text}
                    </Text>
                </View>

            </Animated.View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
    },

    row: {
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },

    text: {
        width: 320,
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
    },

    image: {
        width: 25,
        height: 12,
        marginRight: 15,
    },

    drop: {
        marginLeft: 10,
        marginRight: 10,
    },
    textDrop: {
        padding: 10,
    }
})