import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text, ActivityIndicator, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { CardExtend } from '../../components/Card';
import { SettingButton } from '../../components/SettingButton';
import { StarButton } from '../../components/StarButton';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// import styles from './styles';
import { Activity } from '../Utils/activity';

const BackgroudUrl = "../../../../images/logo3.png";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
const StartScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  const [data, setData] = useState({});
  const database = firebase.database();
  const topics_fb = database.ref('/topics');

  useEffect(() => {
    topics_fb.on('value', function (snapshot: any) {
      setData(snapshot.val());
    });
  }, [])

  if (Object.keys(data).length == 0) {
    return (
      <Activity />
    )
  }
  else {
    const topics: any = [];
    let index = 0;
    for (let [key, value] of Object.entries(data)) {
      topics.push(value);
      topics[index++].topic_Name = key
    }

    return (

      <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/ff/96/32/ff96328718afe299901820609a1139f5.jpg' }} style={styles.image}>
        {/* <Header
            containerStyle={{ paddingTop: 0, height: 60, backgroundColor: '#ff5e00' }}
            leftComponent={<SettingButton navigation={navigation} />}
            centerComponent={<Image source={require(BackgroudUrl)}
              style={{ width: 120, height: 100 }}
            />}
            rightComponent={<StarButton navigation={navigation} />}
          /> */}
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: windowWidth, height: 100, marginBottom: 60,padding:5 }}>
          <View style={{ flex: 1, height: 50,justifyContent:'center',left:-30}}>
            <SettingButton navigation={navigation} />
          </View>
          <View style={{ flex: 2, height: 50 ,justifyContent:'center'}}>
            <Image source={require(BackgroudUrl)} style={{ width: 150, height: 150 }} />
          </View>
          <View style={{ flex: 1, height: 50,justifyContent:'center',right:-30 }}>
            <StarButton navigation={navigation} />
          </View>
        </View>
        <ScrollView>
          {topics.map((e: { topic_Name: any, icon_top: any, img_top: any, vn_meaning: any, icon_type: any }) =>
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
      </ImageBackground>
    )
  }
}

export default StartScreen