import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Learning(props) {
    const { word } = props.wordLearning;
    return (
        <TouchableOpacity>
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <View style={styles.info}>
                        <Text style={styles.name}></Text>
                        <View styles={styles.priceRow}>
                            <Text style={styles.price}>{word}</Text>
                        </View>  
                    </View>
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
        overflow: 'hidden'
    },
    info: {
        padding: 8
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
});