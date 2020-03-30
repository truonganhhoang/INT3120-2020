import React from 'react';
import { Header } from 'react-native-elements';
import { View, ScrollView } from 'react-native';
import { Back } from '../../components/Back';
import { WordGroupCard } from '../../components/WordGroupCard'; 
import styles from './styles'; 


const WordGroupScreen = (props: { route?: any; navigation?: any }) => {
  const { route, navigation } = props; 
  const { nameTopic, wordGroups } = route.params; 
  
  return (
    <View>
      <Header containerStyle={styles.container}
        leftComponent={
          <Back
            navigation={navigation}
          />}
        centerComponent={{ text: nameTopic, style: styles.centerComponent }}
      />
      <ScrollView horizontal={true}>
        {
          wordGroups.map( (e: any) =>
            <WordGroupCard data={e} navigation={navigation}/>
          )
        }
      </ScrollView>
    </View>
  )
}



export default WordGroupScreen; 