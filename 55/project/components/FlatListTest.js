import * as React from 'react';
import { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import FlatListDatas from '../data/FlatListData'
import { View, Text, Alert } from 'react-native';

const dl = [
    {
        "id": "01",
        "name": "người số 1"
    },
    {
        "id": "02",
        "name": "Người thứ 2 nè"
    },
    {
        "id": "03",
        "name": "Người thứ 3 nè"
    },
    {
        "id": "04",
        "name": "Người thứ 4 nè"
    }
]

class FlatListItem extends Component {
    render() {
        return (
            <View style={{ height: 50 }}>

            </View>
        )
    }
}

export class FlatListTest extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: "gray" }}>
                <Text> huhu không hiện à </Text>

                <FlatList
                    data={FlatListDatas}
                    renderItem={({ item }) => {
                        return (
                            <Text style={{ height: 300 }}> {item.text} </Text>
                        )
                    }}
                >

                </FlatList>
            </View>
        )
    }
}