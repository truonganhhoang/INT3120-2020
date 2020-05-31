import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//library
import { SearchBar } from 'react-native-elements'

export default class Header extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    
    render() {
        const { search } = this.state;
        return (
            <View>
                <SearchBar
                    containerStyle={{ backgroundColor: '#1E90FF' }}
                    onChangeText={this.updateSearch}
                    inputContainerStyle={{ backgroundColor: 'white' }}
                    value={search}
                    placeholder="Type here ..."
                />
            </View>
        )
    }
}

