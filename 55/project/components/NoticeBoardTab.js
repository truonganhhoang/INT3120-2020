import * as React from 'react';
import { StyleSheet } from "react-native";

import { FlatList } from 'react-native-gesture-handler';
import { RowBoard } from './/RowBoard';


export default class NoticeBoardTab extends React.Component {
    render() {
        return (
            <FlatList
                style={styles.container}
                removeClippedSubviews={true}

                data={this.props.data}
                renderItem={({ item }) => {
                    return (
                        <RowBoard element={item} />
                    )
                }}
            >
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },
})