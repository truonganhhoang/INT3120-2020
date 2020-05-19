import React from 'react'; 
import { View } from 'react-native'; 
import { Character } from '../CharacterInput'; 
import styles from './styles'; 

const ListCharacter = (props: { data?: any; listCharShow?: any; setListCharShow?: any; disabled?: any}) => {
  const { data, listCharShow, setListCharShow, disabled } = props; 
  
  function addCharacter(char: '') {
    let index = -1; 
    const newListCharShow = [];

    for (let i = 0; i < listCharShow.length; i++) {
      newListCharShow[i] = listCharShow[i]; 
    }

    for (let i = 0; i < listCharShow.length; i++) {
      if (listCharShow[i] == ""){
        index = i; 
        i = listCharShow.length; 
      }
    }
    if (index != -1){
      newListCharShow[index] = char
    }
    setListCharShow(newListCharShow); 
  }

  return (
    <View style={styles.listItem}>
      {data.map((e: any) => 
        <Character char={e} onPress={() => addCharacter(e)} disabled={disabled}/>
      )}
    </View>
  )
}

export default ListCharacter; 