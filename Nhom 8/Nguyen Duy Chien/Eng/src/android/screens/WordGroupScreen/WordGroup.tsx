import React from 'react';
import { Header, Card, Icon } from 'react-native-elements';
import { View, ScrollView, Text } from 'react-native';
import { Back } from '../../components/Back';
import { CardWordGroup } from '../../components/CardWordGroup'; 
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
          wordGroups.map( e =>
            <CardWordGroup data={e}/>
          )
        }
      </ScrollView>
    </View>
  )
}



export default WordGroupScreen; 