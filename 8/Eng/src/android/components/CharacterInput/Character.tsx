import React from 'react'; 
import { View } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 40,
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    color: 'black'
  },

});

const Char = (props: {onPress?: any; char?: any; disabled?: any}) => {
  const { onPress, char, disabled } = props; 
  return (
    <View>
      <Button
        title={char}
        onPress={onPress}
        buttonStyle={styles.button}
        titleStyle={styles.title}
        disabled={disabled}
      />
    </View>
  )
}

export default Char; 