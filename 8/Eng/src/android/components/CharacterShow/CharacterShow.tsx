import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: "black",
  }
})

const CharacterShow = (props: { char?: any; onPress?: any; color?: any; disabled?: any }) => {
  const { char, onPress, color, disabled } = props;
  return (
    <Button
      title={char}
      buttonStyle={{
        width: 30,
        height: 40,
        marginLeft: 10,
        marginTop: 10,
        borderColor: 'red',
        backgroundColor: color,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
      }}
      type="clear"
      titleStyle={styles.title}
      onPress={onPress}
      disabled={disabled}
    />
  )
}

export default CharacterShow; 