import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import { Icon } from 'react-native-elements'
import styles from '../../styles/style.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DATA from '../../data/QuestionData';
import modalData from '../../data/ModalData';

// npm install --save react-native-vector-icons
import { Feather } from '@expo/vector-icons';

export default function MemoryTricks({ route, navigation }) {
    const questionSet = route.params.questionSet;
    const [question, setQuestion] = useState(DATA[questionSet].data[0]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {  
            navigation.setOptions({
                title: 'Tất cả',
                headerRight: props => (
                    <TouchableOpacity onPress={ () => navigation.setParams({ modalVisible: true }) }>
                        <View style={{ borderRadius: 50, borderWidth: 3.5, borderColor: 'purple', height: 32, width: 32, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                            <Text style={{fontSize: 11.5, color: '#a0a0a0' }}>ALL</Text>
                        </View>
                    </TouchableOpacity>
                )
            });
        });
    
        return unsubscribe;
    }, [navigation]);

    
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
            
            <Modal animationType='fade' transparent={true} visible={route.params.modalVisible} >
                <TouchableOpacity onPress={ () => navigation.setParams({ modalVisible: false }) } style={{ flex: 1 }} activeOpacity={1} >
                    <TouchableWithoutFeedback>
                        <View style={{ height: 500, width: 225, alignSelf: 'flex-end', backgroundColor: '#fff', marginTop: 60 }} >
                            <View style={{ height: 390, width: 225, backgroundColor: '#fff', alignSelf: 'flex-end', paddingHorizontal: 15, paddingVertical: 10, elevation: 15 }}>
                                <FlatList
                                    data={modalData}
                                    renderItem={ ({ item }) => (
                                        <TouchableOpacity onPress={ () => {
                                            setQuestion(DATA[item.questionSet].data[0])
                                            navigation.setParams({ modalVisible: false, questionSet: item.questionSet });
                                            navigation.setOptions({
                                                title: item.title,
                                                headerRight: props => (
                                                <TouchableOpacity onPress={ () => navigation.setParams({ modalVisible: true }) }>
                                                    <View style={{ borderRadius: 50, borderWidth: 3.5, borderColor: item.color, height: 32, width: 32, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                                                        <Text style={{fontSize: 11.5, color: '#a0a0a0' }}>{item.questionNumbers}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            ) });
                                        }} >
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                                                <View style={{ borderRadius: 50, borderWidth: 3.5, borderColor: item.color, height: 32, width: 32, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                                                    <Text style={{fontSize: 11.5, color: '#a0a0a0' }}>{item.questionNumbers}</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 16 }}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id}
                                    // showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

function QuestionRangeItem(props) {
    return (
        <TouchableOpacity onPress={ () => {
            React.Dispatch<React.SetStateAction<props.data>>
            props.navigation.setParams({ modalVisible: false, questionSet: props.questionSet });
            props.navigation.setOptions({
                title: props.title,
                headerRight: propsR => (
                <TouchableOpacity onPress={ () => props.navigation.setParams({ modalVisible: true }) }>
                    <View style={{ borderRadius: 50, borderWidth: 3.5, borderColor: props.color, height: 32, width: 32, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                        <Text style={{fontSize: 11.5, color: '#a0a0a0' }}>{props.questionNumbers}</Text>
                    </View>
                </TouchableOpacity>
            ) });
        }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                <View style={{ borderRadius: 50, borderWidth: 3.5, borderColor: props.color, height: 32, width: 32, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                    <Text style={{fontSize: 11.5, color: '#a0a0a0' }}>{props.questionNumbers}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16 }}>
                        {props.title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}