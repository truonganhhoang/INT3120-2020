import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class WordTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHeart: require('../../assets/Image/heart-inactive.png')
        }
    }
    goToWordDetail() {
        this.props.navigation.navigate('WordDetail', {
            title: this.props.title,
            word: this.props.word,
            spelling: this.props.spelling,
            type: this.props.type,
            meaning: this.props.meaning
        });
    }

    changeImage() {
        if (this.state.imageHeart === require('../../assets/Image/heart-inactive.png')) {
            this.setState({
                imageHeart: require('../../assets/Image/heart-active.png')
            });
        }
        else{
            this.setState({
                imageHeart: require('../../assets/Image/heart-inactive.png')
            });
        }
    }

    render() {
        return (
            <View style={word.container}>
                <TouchableOpacity style={{ flex: 4 }}
                    onPress={this.goToWordDetail.bind(this)}
                >
                    <View>
                        <Text style={word.textWord}>{this.props.word}</Text>
                    </View>
                    <View>
                        <Text style={word.textSpelling}>{this.props.spelling}</Text>
                    </View>
                    <View>
                        <Text style={word.textType}>{this.props.type}</Text>
                    </View>
                    <View>
                        <Text style={word.textMeaning}>{this.props.meaning}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.changeImage()}
                    >
                        <Image
                            style={word.icon}
                            source={this.state.imageHeart}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={word.icon}
                            source={require('../../assets/Image/speaker.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

let word = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#00BFFF',
        borderRadius: 5,
        margin: 10,
        padding: 5,
    },
    textSpelling: {
        textColor: '#00BFFF',
    },
    textWord: {
        fontSize: 22,
        color: '#483D8B',
        fontWeight: 'bold',
    },
    textType: {
        color: 'gray'
    },
    textMeaning: {
        fontSize: 18,
        color: 'black'
    },
    icon: {
        width: 24,
        height: 24,
    }
});

