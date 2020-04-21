import React from 'react'; 
import { Button } from 'react-native-elements'; 
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  title: {
    color: "black"
  }
})

const CharacterShow = (props: { char?: any; onPress?: any; color?: any; disabled?: any }) => {
  const { char, onPress, color, disabled } = props; 
  return (
    <Button 
      title={char}
      type='outline'
      buttonStyle={{
        width: 30, 
        height: 40, 
        marginLeft: 10, 
        marginTop: 10, 
        backgroundColor: color
      }}
      titleStyle={styles.title}
      onPress={onPress} 
      disabled={disabled}
    />
  )
}

export default CharacterShow; 