import React, { useState, useEffect } from 'react'; 
import { Text, View } from 'react-native'; 
import { Overlay, ButtonGroup, Button, withBadge } from 'react-native-elements'; 
import styles from './style';

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
      height={200}
    >
      <View style={{alignItems:"center"}}>
        <Text style={styles.txtTitle}>Lựa chọn số câu hỏi:</Text>
        <ButtonGroup
          onPress={onChange}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.button}
          textStyle={{color:'#ff5e00'}}
          selectedButtonStyle={{backgroundColor:'#f57f17'}}
          selectedTextStyle={{color:'#FFF',fontWeight:'bold'}}
        />
        <Button
          title="Bắt đầu"
          containerStyle={styles.btnStart}
          onPress={start}
          buttonStyle={{backgroundColor:'#f57f17'}}
        />
      </View>
    </Overlay>  
  )
}

export default Ask; 