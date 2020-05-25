import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Learning(props) {
    const { wordLearning, onPress, findId } = props;
    return (
        <TouchableOpacity onPress={()=>{
            onPress(wordLearning.id)
        }}>
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Text style={styles.text}>{wordLearning.mean}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({

    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        padding: 20,
        height: 100
    },
    text: {
        fontSize: 16,
        color: '#4B4B4B',
        flex: 1
    }
});