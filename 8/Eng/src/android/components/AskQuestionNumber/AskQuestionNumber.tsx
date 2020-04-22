import React, { useState, useEffect } from 'react'; 
import { Text, View } from 'react-native'; 
import { Overlay, ButtonGroup, Button } from 'react-native-elements'; 

const Ask = (props: { setQuestionNumber?: any; Visible?: any }) => {
  const { setQuestionNumber, Visible } = props; 
  const buttons = ['20', '50', '100']
  const [selectedIndex, setSelected] = useState(0); 
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    setIsVisible(Visible); 
  }, [Visible])

  const onChange = (selectedIndex: React.SetStateAction<number>) => {
    setSelected(selectedIndex); 
  }

  const start = () => {
    setIsVisible(false); 
    // console.log(buttons[selectedIndex]); 
    setQuestionNumber(buttons[selectedIndex]); 
  }

  return (
    <Overlay 
      isVisible={isVisible}
    >
      <View>
        <Text>Select question number in your test!</Text>
        <ButtonGroup
          onPress={onChange}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}}
        />
        <Button
          title="Start"
          onPress={start}
        />
      </View>
    </Overlay>  
  )
}

export default Ask; 