import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('../images/arrow/down_arrow.png'),
            'down': require('../images/arrow/up_arrow.png')
        };

        this.state = {
            title: props.title,
            expanded: true,
            animation: new Animated.Value(40)
        };
    }

    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = !this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        // this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
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
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];
        }

        return (
            <Animated.View
                style={[styles.container, { height: this.state.animation }]}>

                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    <Text> adada </Text>
                    <Text> adada </Text>
                    <Text> adada </Text>
                    <Text> adada </Text>
                    <Text> adada </Text>
                    <Text> adada </Text>
                    <Text> adada </Text>
                    <Text> adadahjhjh </Text>
                </View>

            </Animated.View>
        );
    }
}

export function test() {
    return (
        <View style={{ flex: 1 }}>
            <Panel title='testani' />

        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden',
    },

    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});