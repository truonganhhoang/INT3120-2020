import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import content from '../components/data'
import Card from '../components/Card'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={content}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() =>{ navigation.navigate('Unit', item)}}>
            <Card>  
              <Text>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
