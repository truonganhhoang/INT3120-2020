import React from 'react'; 
import { ScrollView, Text } from 'react-native'; 
import { WordCard } from '../../components/WordCard'; 
import Data from '../../../../data/list-word.json'; 
import styles from './styles'; 

const Vocabularys = () => {
  console.log(Data.words); 
  return (
    <ScrollView>
      {
        Data.words.map( (e: any) =>
          <WordCard data={e}
            key={e.en_meaning}
            colorS="yellow"
          />
        )
      }
    </ScrollView>
  )
}

export default Vocabularys; 