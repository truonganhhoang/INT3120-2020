import React from 'react'; 
import { ScrollView, Text } from 'react-native'; 
import { WordCard } from '../../components/WordCard'; 
import styles from './styles'; 
const Data = require('../../../../data/list-word.json'); 

const Vocabularys = () => {
  console.log(Data.words); 
  return (
    <ScrollView>
      {
        Data.words.map( (e: any) =>
          <WordCard data={e}
            key={e.en_meaning}
            icon="staro"
          />
        )
      }
    </ScrollView>
  )
}

export default Vocabularys; 