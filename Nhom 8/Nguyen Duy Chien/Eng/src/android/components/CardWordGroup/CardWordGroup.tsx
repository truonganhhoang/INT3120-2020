import React from 'react'; 
import styles from './styles'; 
import { Card, Button, Icon } from 'react-native-elements';  
import { Text } from 'react-native';

const CardWordGroup = (props: {data?: any}) => {
  const { data } = props; 
  console.log(data); 
  return (
    <Card
      title={data.word_group_name}
      image={require('../../../../images/cards/clother.jpg')}
    >
      <Text style={{marginBottom: 10}}>
        {data.wg_vn_name}
      </Text>
      <Text style={{marginBottom: 10}}>
        Help you master 28 words related to {data.wg_vn_name} in English
      </Text>
      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='DETAIL'
      />
    </Card>
  )
}

export default CardWordGroup; 