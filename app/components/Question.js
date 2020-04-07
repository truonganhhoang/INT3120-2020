import React, { useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import {RadioButton} from 'react-native-paper'

export default function Question() {
    const [check, setCheck] = useState('')

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Question 1</Text>
            <RadioButton.Group
            onValueChange={(check) => setCheck(check)}
            value={check}
            >
            <FlatList 
                data = {[{key: 'first'},{key: 'second'}, {key: 'third'},{key: 'fourth'}]}
                renderItem = { ({item}) =>  (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton value={item.key} />
                    <Text>{item.key}</Text>
                </View>
                )}
            />
            </RadioButton.Group>
        </View>
    )
}