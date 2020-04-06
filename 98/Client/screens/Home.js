import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/style.js';
import QuestionSet from './QuestionSet';
import MemoryTricks from './MemoryTricks';
import QuestionPractice from './QuestionPractice';
// npm install --save react-native-vector-icons
import { Feather } from '@expo/vector-icons';

function Home({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
            <View style={{flex: 0.26, flexDirection: 'row', paddingHorizontal: 10, }}>
                <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', }}
                    onPress={ () => navigation.navigate('QuestionPractice')}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#cccccc' }}>
                        <Feather name='feather' size={40} color='#ff0000' />
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Ôn tập câu hỏi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', }}
                    onPress={ () => navigation.navigate('MemoryTricks', {questionSet: 7})}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#cccccc' }}>
                        <Feather name='cloud' size={40} color='gray' />
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Mẹo ghi nhớ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Stack = createStackNavigator();

function Navigation() {
  return (
    // <View style={{ flex: 1 }}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Hello ^^' }}
            />
            <Stack.Screen 
                name="QuestionPractice" 
                component={QuestionPractice} 
                options={{ title: 'Ôn tập câu hỏi' }} 
            />
            <Stack.Screen 
                name="QuestionSet" 
                component={QuestionSet} 
                options={{ 
                title: 'Ôn tập Khái Niệm', 
                }} 
            />
            <Stack.Screen 
                name="MemoryTricks"
                component={MemoryTricks}
                initialParams={{ modalVisible: false }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    // </View>
  )
}

export default Navigation;