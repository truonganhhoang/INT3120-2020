import React, { useState, useEffect } from 'react'; 
import { ScrollView, View, Image, Text } from 'react-native';
import { CardExtend } from '../../components/Card';
import { SettingButton } from '../../components/SettingButton';
import { StarButton } from '../../components/StarButton';
import { Header } from 'react-native-elements';
import firebase from 'firebase'; 
import styles from './styles';
const Data = require('../../../../data/pre-data.json');

const BackgroudUrl = "../../../../images/logo3.png";

const StartScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  const [data, setData] = useState({}); 
  const database = firebase.database(); 
  const topics_fb = database.ref('/topics'); 
  
  useEffect(() => {
    topics_fb.on('value', function(snapshot: any) {
      setData(snapshot.val()); 
    }); 
  }, [])

  if (Object.keys(data).length == 0) {
    return (
      <View>
        <Text>
          Waiting data ...
        </Text>
      </View>
    )
  }
  else {
    const topics:any=[];
    Object.keys(data).forEach((item,index)=>{
      topics.push(data[item]);
      topics[index].topic_Name=item
    });
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
          {topics.map((e: { topic_Name:any,icon_top:any,img_top:any,vn_meaning:any, icon_type: any }) =>
            <CardExtend
              icon_top={e.icon_top}
              icon_type={e.icon_type}
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
}

export default StartScreen