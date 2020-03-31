import React from 'react'; 
import { View, ScrollView } from 'react-native'; 
import { Header } from 'react-native-elements';
import { Back } from '../../components/Back'; 
import { WordCard } from '../../components/WordCard'; 
import { MenuButton } from '../../components/Menu'; 

import styles from './styles'; 

const Screen = (props : {navigation?: any; route?: any}) => {
  const { navigation, route } = props; 
  const { data } = route.params; 
  console.log('Welcome to Detail Word Group Screen'); 

  return (
    <View>
      <Header 
        containerStyle={styles.header}
        leftComponent={
          <Back navigation={navigation} backScreen={'WordGroupScreen'} color={'#ff5e00'}/>
        }
        rightComponent={
          <MenuButton />
        }
        centerComponent={{ text: data.word_group_name, style: styles.centerComponent }}
      />
      <ScrollView>
        {
          data.words.map( (e: any) =>
            <WordCard data={e}/>
          )
        }
      </ScrollView>
    </View>
  )
}

export default Screen; 