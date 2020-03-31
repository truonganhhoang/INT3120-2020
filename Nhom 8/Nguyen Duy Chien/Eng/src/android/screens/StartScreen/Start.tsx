import React from 'react';
import {  ScrollView, View, Image } from 'react-native';
import { CardExtend } from '../../components/Card';
import { SettingButton } from '../../components/SettingButton';
import { StarButton } from '../../components/StarButton';
import { Header } from 'react-native-elements';
import styles from './styles'; 
import Data from '../../../../data/pre-data.json'; 

const BackgroudUrl = "../../../../images/logo.png";

const StartScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{paddingTop:0,height:60,backgroundColor:'#ff5e00'}}
        leftComponent={<SettingButton navigation={navigation} />}
        centerComponent={<Image source={require(BackgroudUrl)}
        style={{ width: 50, height: 50 }}
      />}
        rightComponent={ <StarButton navigation={navigation} />}
      />
      <ScrollView>
        {Data.topics.map((e: { topic_name: string | number | undefined; topic_img: any; topic_icon: any; vn_name: any; word_groups: any; }) =>
          <CardExtend
            nameCard={e.topic_name}
            imageCard={e.topic_img}
            icon={e.topic_icon}
            key={e.topic_name}
            vi={e.vn_name}
            navigation={navigation}
            wordGroups={e.word_groups}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default StartScreen