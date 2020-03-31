import React, { useState } from 'react'; 
import { Card, Icon, Image } from 'react-native-elements'; 
import { Text, TouchableOpacity, View } from 'react-native'; 
import styles from './styles'; 



const Word = (props: {data?: any}) => {
  const { data } = props; 
  const [colorStar, setColorStar] = useState('white')
  console.log(data); 
  const onPressStar = () => {
    console.log('Star is Ready!'); 
    if (colorStar == 'white'){
      setColorStar('yellow'); 
    } 
    else if (colorStar == 'yellow'){
      setColorStar('white'); 
    }
  }
  return (
    <TouchableOpacity style={styles.btn}>
      <Card
        containerStyle={styles.card}
      >
        <Image 
          source={{uri: '../../../../images/cards/clother.jpg'}}
          style={styles.img}
        />
        <Icon 
          name='star'
          type='font-awesome'
          color={colorStar}
          size={30}
          containerStyle={styles.star_icon}
          onPress={onPressStar}
        />
        <Text style={styles.en_text}>
          {data.en_meaning}
        </Text>
        <Text style={styles.spelling_text}>
          {data.spelling}
        </Text>
        <Icon 
          name='volume-up'
          type='font-awesome'
          color='orange'
          size={20}
          containerStyle={styles.voice_icon}
          onPress={() => {console.log('Speaking')}}
        />
        <Text style={styles.vn_text}>
          {data.vn_meaning}
        </Text>
      </Card>
    </TouchableOpacity>
  )
}

export default Word; 