import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ScrollView, TouchableHighlight, FlatList } from 'react-native-gesture-handler';


export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListItems: [
                { id: "1", key: "Dành cho người mới lái xe" },
                { id: "2", key: "Kỹ thuật lái xe ban đêm" },
                { id: "3", key: "Kỹ năng lái xe số tự động (AT)" },
                { id: "4", key: "Kỹ thuật lái xe ô tô lên, xuống dốc an t..." },
                { id: "5", key: "Thế nào là một lái xe giỏi" },
                { id: "6", key: "Những dấu hiệu lái xe chưa thành thạo" },
                { id: "7", key: "Lái xe qua đường ngập ước" },
            ]
        };
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.state.ListItems}
                    renderItem={({ item }) =>
                        <TouchableHighlight style={styles.container}>
                            <View style={styles.typesRank}>
                                <Text style={styles.nameRank}>{item.id}</Text>
                                <Text style={styles.contentRank}>{item.key}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                />
            </ScrollView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 10,
        justifyContent: 'center',
    },
    typesRank: {
        backgroundColor: '#fff',
        flexDirection: "row",
        paddingVertical: 15,
        paddingStart: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 4,
    },
    nameRank: {
        fontWeight: 'bold',
    },
    contentRank: {
        marginLeft: 20,
        color: '#A4A4A4'
    }
});