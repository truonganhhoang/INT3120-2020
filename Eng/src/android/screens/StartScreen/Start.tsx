import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { CardExtend } from '../../components/Card';
import { SettingButton } from '../../components/SettingButton';
import { StarButton } from '../../components/StarButton';
import { Header } from 'react-native-elements';
import styles from './styles';
const Data = require('../../../../data/pre-data.json');

const BackgroudUrl = "../../../../images/logo3.png";

const StartScreen = (props: { navigation: any }) => {
  const topics:any=[];
    Object.keys(Data).forEach((item,index)=>{
      topics.push(Data[item]);
      topics[index].topic_Name=item
    });
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{ paddingTop: 0, height: 60, backgroundColor: '#ff5e00' }}
        leftComponent={<SettingButton navigation={navigation} />}
        centerComponent={<Image source={require(BackgroudUrl)}
          style={{ width: 120, height: 100 }}
        />}
        rightComponent={<StarButton navigation={navigation} />}
      />
      <ScrollView>
        {topics.map((e: { topic_Name:any,icon_top:any,img_top:any,vn_meaning:any }) =>
          <CardExtend
            icon_top={e.icon_top}
            img_top={e.img_top}
            vn_meaning={e.vn_meaning}
            topic_name={e.topic_Name}
            navigation={navigation}
            key={e.topic_Name}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default StartScreen