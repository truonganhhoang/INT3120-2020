import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/style.js';
import QuestionSet from './QuestionSet'
import MemoryTricks from './MemoryTricks'
import DATA from '../data/QuestionPracticeData'

export default function QuestionPractice({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={ ({ item }) =>
          (
            <TouchableOpacity onPress={() => navigation.navigate('QuestionSet', {questionSet: item.id})}>
              <Item
                color={item.color}
                questionRange={item.questionRange}
                title={item.title}
                briefDescription={item.briefDescription}
                theme={item.theme}
              />
            </TouchableOpacity>
          )
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function Item(props) {
  return (
  <View style={styles.itemContainer}>
    <View style={styles.floatLeft}>
      <TripleCirleIcon color={props.color}/>
      <Text style={{color: props.color, marginTop: 10}}>{props.questionRange}</Text>
    </View>

    <View style={styles.floatRight}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.briefDescription}>{props.briefDescription}</Text>
      <View style={{backgroundColor: props.color, height: 30, width: 120, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{textTransform: "uppercase", color: '#fff', fontWeight: "bold"}}>{props.theme}</Text>
      </View>
    </View>
  </View>
  );
}

function TripleCirleIcon(props) {
  return (
  <View style={getStyle(60, props.color)}>
    <View style={getStyle(34, props.color)}>
      <View style={getStyle(14, props.color)}>
      </View>
    </View>
  </View>
  );
}

function getStyle(size, color) {
  return {
    height: size,
    width: size,
    borderColor: color,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
}