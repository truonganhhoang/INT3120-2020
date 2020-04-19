import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';


export default class List extends Component {

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Hello, what is your name?' },
                        { key: 'Goodnight, sweet dream !' },
                        { key: 'Good afternoon, wanna a game' },
                        { key: 'Good Morning' },
                        { key: 'Wellcome to my house' },
                        { key: 'Tilte, this is party' },
                        { key: 'Home, i am comming ' },
                        { key: 'Screen' },
                        { key: 'Stack' },
                        { key: 'List' },
                        { key: 'Hello' },
                        { key: 'Good night' },
                        { key: 'Good afternoon' },
                        { key: 'Good night!' },
                        { key: 'Wellcome' },
                        { key: 'Tilte' },
                        { key: 'Home' },
                        { key: 'Game' },
                        { key: 'Draw' },
                        { key: 'Phone' },
                    ]}
                    renderItem={({ item }) => <View style={styles.item}><Text style={styles.wordSize}> {item.key} </Text>
                    </View>}
                />

            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 3,
        backgroundColor: 'white'
    },

    wordSize: {
        fontSize: 20
    },

    item: {
        padding: 10,
        margin: 4,
        backgroundColor: 'whitesmoke',
        borderRadius: 4,

    }
});


