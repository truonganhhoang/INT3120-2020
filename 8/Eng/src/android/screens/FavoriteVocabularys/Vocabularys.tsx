import React, { useState, useEffect } from 'react'; 
import { FlatList, SafeAreaView, View, Text } from 'react-native'; 
import { WordCard } from '../../components/WordCard'; 
import { getTobeHandleFromStorage } from '../../services'; 
import { Activity } from '../Utils/activity';
import styles from './styles'; 

const Vocabularys = () => {
  const [load, setLoad] = useState(true)
  const [dataWord, setDataWord] = useState([{lessonName: '', topicName: '', en_meaning: ''}])

  const updateFavorite = (err: any, result: any) => {
    let data = JSON.parse(result)
    let words: any = [];
    for (let [key, value] of Object.entries(data)) {
      words.push(value); 
    }
    setDataWord(words)
    setLoad(false)
    console.log('[Favorite Vocabulary] update favorite')
  }

  useEffect(() => {
    getTobeHandleFromStorage('favoriteWords', updateFavorite); 
  }, [])

  const EmptyComponent = () => {
    return (
      <View>
        <Text style={{ alignSelf: "center", marginTop: 30, fontSize: 15 }}>Bạn chưa có bất cứ từ vựng nào!</Text>
      </View>
    )
  }

  const remove = () => {
    console.log('[Favorite Vocabulary] remove favorite word')
    getTobeHandleFromStorage('favoriteWords', updateFavorite); 
  }

  if (load) {
    return (
      <Activity />
    )
  } else {
    return (
      <SafeAreaView>
        <FlatList 
          data={dataWord}
          ListEmptyComponent={EmptyComponent}
          extraData={dataWord}
          renderItem={({ item }) => {
            let lessonInfo = {
              lessonName: item.lessonName, 
              topicName: item.topicName
            }
            return (
              <WordCard data={item}
                icon="star"
                key={item.en_meaning}
                lessonInfo={lessonInfo}
                remove={remove}
              />
            )
          }}
          keyExtractor={ item => item.en_meaning }
        />
      </SafeAreaView>
    )
  }
}

export default Vocabularys; 