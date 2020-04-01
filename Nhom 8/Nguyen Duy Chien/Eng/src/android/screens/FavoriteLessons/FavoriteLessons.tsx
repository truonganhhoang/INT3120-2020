import React from 'react';
import { ScrollView, Text } from 'react-native'; 
import { WordGroupCard } from '../../components/WordGroupCard'; 
import styles from './styles'; 
import Data from '../../../../data/list-lesson.json'; 

const Lessons = (props: {navigation?: any}) => {
  const { navigation } = props; 
  console.log(Data.word_groups); 
  return (
    <ScrollView
      horizontal={true}
    >
      {
        Data.word_groups.map( (e: any) =>
          <WordGroupCard 
            data={e}
            navigation={navigation}
            key={e.word_group_name}
          />
        )
      }
    </ScrollView>
  )
}

export default Lessons; 