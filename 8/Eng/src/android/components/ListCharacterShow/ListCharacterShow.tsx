import React from 'react'; 
import { View } from 'react-native'; 
import { CharacterShow } from '../CharacterShow'; 
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
  }
})


const List = (props: { data?: any; setListCharShow?: any; color?: any; disabled?: any }) => {
  const { data, setListCharShow, color, disabled } = props; 
 
  function remove(char: any) {
    console.log(char); 
    const newList = []; 
    let index = -1; 
    for (let i = 0; i < data.length; i++) {
      newList.push(data[i]); 
      if (data[i] == char) {
        index = i; 
      }
    }
    if (index != -1) {
      newList[index] = "";
    }
    setListCharShow(newList); 
  }

  return (
    <View style={styles.listItem}>
      {data.map((e: any) => 
        <CharacterShow char={e} onPress={() => remove(e)} color={color} disabled={disabled}/>
      )}
    </View>
  )
}

export default List; 