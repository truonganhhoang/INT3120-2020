import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from '../../styles/style.js';
import DATA from '../../data/QuestionData';
// npm install --save react-native-vector-icons
import { Feather } from '@expo/vector-icons';

export default function QuestionSet({ route, navigation }) {
    const questionSet = route.params.questionSet;
    const [question, setQuestion] = useState(DATA[questionSet].data[0]);

    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal: 10 }}>
                <FlatList
                    data={DATA[questionSet].data}
                    renderItem={({ item }) => (        
                    <TouchableOpacity onPress={() => {
                        setQuestion(DATA[questionSet].data[item.id])
                    }}>
                        <View style={{paddingVertical: 15, paddingHorizontal: 30, borderBottomColor: "#cccccc", borderBottomWidth: 2}}>
                            <Text style={{ fontSize: 15, textTransform: 'uppercase' }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>)}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{ marginLeft: 25, marginRight: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{question.question}</Text>
                {question.answers.map((item, key) => 
                    <View key={key} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, }}>
                        <Feather name={item.icon.name} size={32} color={item.icon.color} />
                        <Text style={{ flex: 1, fontSize: 16, paddingLeft: 15 }}>{item.text}</Text>
                    </View>
                )}
                <Text style={{ fontSize: 14.5, textDecorationLine: 'underline', color: 'gray', marginTop: 25 }}>Gợi ý:</Text>
                <Text style={{ fontSize: 14.5, color: 'gray' }}>{question.clue}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#cc0000', marginTop: 25 }}>
                        Đáp án: {question.correctAnswersToString}
                    </Text>
            </View>
        </View>
    );
}