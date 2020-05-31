// Core
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Style
import { onlineTranslation } from '../../../assets/Styles/Home/onlineTranslation';


export default class LessonTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: '',
            text2: '',
            DefaultMode: 'Tiếng Việt',
            OtherMode: 'Tiếng Anh'
        };
    }

    changeMode() {
        var temp = this.state.DefaultMode;
        this.setState({
            DefaultMode: this.state.OtherMode,
            OtherMode: temp
        });
    }

    render() {
        return (
            <View style={onlineTranslation.container}>
                <View style={onlineTranslation.sectionTranslation}>
                    <View style={onlineTranslation.wrapperInputArea}>
                        <TextInput
                            multiline={true}
                            numberOfLines={6}
                            onChangeText={(text1) => this.setState({ text1 })}
                            value={this.state.text1}
                        />
                    </View>
                    <View style={onlineTranslation.wrapperIconArea}>
                        <TouchableOpacity
                            onPress={() => alert('click')}
                        >
                            <Image
                                style={onlineTranslation.icon}
                                source={require('../../../assets/Image/speaker.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={onlineTranslation.sectionTranslateMode}>
                    <Text>{this.state.DefaultMode}</Text>
                    <TouchableOpacity
                        onPress={() => this.changeMode()}
                    >
                        <Image
                            style={onlineTranslation.icon}
                            source={require('../../../assets/Image/refresh.png')}
                        />
                    </TouchableOpacity>
                    <Text>{this.state.OtherMode}</Text>
                    <Button
                        title='Dịch'
                        onPress={() => alert('Dịch')}
                    />
                </View>

                <View style={onlineTranslation.sectionTranslation}>
                    <View style={onlineTranslation.wrapperInputArea}>
                        <TextInput
                            multiline={true}
                            numberOfLines={6}
                            onChangeText={(text2) => this.setState({ text2 })}
                            value={this.state.text2}
                        />
                    </View>
                    <View style={onlineTranslation.wrapperIconArea}>
                        <TouchableOpacity
                            onPress={() => alert('click')}
                        >
                            <Image
                                style={onlineTranslation.icon}
                                source={require('../../../assets/Image/speaker.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
