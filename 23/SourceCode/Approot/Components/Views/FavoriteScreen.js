// Core
import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Layout
import Header from '../Layout/Header';

//Data
import { listWordFavorite } from '../../assets/Data/DataFavorite';

//Styles
import { mainLayout, tag } from '../../assets/Styles/Favorite/favorite';


const data = listWordFavorite;

export default class FavoriteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: {}
        };
        this.getFavoriteWord();
    }
    getFavoriteWord = async () => {
        try {
            this.setState({
                word: await AsyncStorage.getItem('favorite')
            });
        } catch (e) {
            console.log(e);
        }
    }

    renderResult() {
        if (listWordFavorite.length > 0) {
            return (
                <View>
                    {
                        data.map((item, index) => (
                            <View style={tag.container} key={index}>
                                <View>
                                    <Text style={tag.wordText}>{item.word}</Text>
                                    <Text style={tag.typeText}>{item.type}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Image
                                            style={tag.icon}
                                            source={require('../../assets/Image/speaker.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            style={tag.icon}
                                            source={require('../../assets/Image/heart-active.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={mainLayout.text}>Chưa có từ vựng nào trong danh sách từ vựng của bạn</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={mainLayout.header}>
                    <Header />
                </View>
                <View style={mainLayout.content}>
                    {this.renderResult()}
                </View>
            </View>
        );
    }
}
