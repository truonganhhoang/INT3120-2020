import React, { useState } from 'react'; 
import { Card, Icon, Image } from 'react-native-elements'; 
import { Text, TouchableOpacity, View } from 'react-native'; 
import styles from './styles'; 
import IconFontAwesome5 from 'react-native-vector-icons/AntDesign';


const Word = (props: {data?: any; icon: any}) => {
  const { data } = props; 
  const { icon } = props;
  const [colorStar, setColorStar] = useState(icon)
  const onPressStar = () => {
    console.log(colorStar)
    if (colorStar == 'star'){
      setColorStar('staro'); 
    } 
    else if (colorStar == 'staro'){
      setColorStar('star'); 
    }
  }
  return (
    <TouchableOpacity style={styles.btn}>
      <Card
        containerStyle={styles.card}
      >
        <Image 
          source={require('../../../../images/cards/food.jpg')}
          style={styles.img}
        />
        <IconFontAwesome5 
          name={colorStar}
          color='#ff5e00'
          size={30}
          style={styles.star_icon}
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
          color='orange'
          size={20}
          style={styles.voice_icon}
          iconStyle={{marginLeft:120,marginTop:5}}
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