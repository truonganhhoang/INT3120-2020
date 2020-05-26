import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, FlatList, ImageBackground } from 'react-native';
import { CardExtend } from '../../components/Card';
import { SettingButton } from '../../components/SettingButton';
import { StarButton } from '../../components/StarButton';
import firebase from 'firebase';
import styles from './styles';
import { Activity } from '../Utils/activity';
import { SplashScreen } from '../SplashScreen';

const BackgroudUrl = "../../../../images/logo.png";


const ItemSeparator = () => {
  return (<View style={styles.separator}></View>)
}

const StartScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  const [data, setData] = useState({});
  const database = firebase.database();
  const topics_fb = database.ref('/topics');

  useEffect(() => {
    topics_fb.on('value', function (snapshot: any) {
      setTimeout(() => {
        setData(snapshot.val());
      }, 3000);
    });
  }, [])

  if (Object.keys(data).length == 0) {
    navigation.setOptions({ headerTransparent: true, headerTitle: "" })
    return (
      // <Activity />
      <SplashScreen />
    )
  }
  else {
    const topics: any = [];
    let index = 0;
    for (let [key, value] of Object.entries(data)) {
      topics.push(value);
      topics[index++].topic_Name = key
    }
    navigation.setOptions({
      headerTitleAlign: "center",
      headerTransparent: true,
      headerTitleContainerStyle: { marginHorizontal: 20, marginTop: 20 },
      headerTitle: () => (<Image source={require(BackgroudUrl)}
        style={{ width: 60, height: 60 }}
      />),
      headerLeftContainerStyle: { marginTop: 16, padding: 16 },
      headerLeft: () => {
        return (<SettingButton navigation={navigation} />);
      },
      headerRightContainerStyle: { marginTop: 16, padding: 16 },
      headerRight: () => {
        return (<StarButton navigation={navigation} />);
      }
    })
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://i.pinimg.com/564x/ff/96/32/ff96328718afe299901820609a1139f5.jpg' }}
          style={styles.image}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={styles.listItems}
            data={topics}
            renderItem={({ item }) => {
              return (
                <CardExtend
                  icon_top={item.icon_top}
                  icon_type={item.icon_type}
                  img_top={item.img_top}
                  vn_meaning={item.vn_meaning}
                  topic_name={item.topic_Name}
                  navigation={navigation}
                  key={item.topic_Name}
                />
              );
            }}
          />
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

export default StartScreen