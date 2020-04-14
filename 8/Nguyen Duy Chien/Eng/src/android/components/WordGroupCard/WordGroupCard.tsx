import React, { Component, useState } from 'react';
import styles from './styles';
import { Card, Button } from 'react-native-elements';
import IconAntDeisign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, Dimensions, ProgressBarAndroid, Image } from 'react-native';

const CardWordGroup = (props: { data?: any; navigation?: any }) => {
  const { data } = props;
  const { navigation } = props;
  const [colorStar,setColorStar]=useState("staro");
  const changeStar=()=>{
    if (colorStar == 'staro'){
      setColorStar('star');
    } 
    else if (colorStar == 'star'){
      setColorStar('staro'); 
    }
  };
  const onPress = () => {
    navigation.navigate('DetailWordGroupScreen', { data: data });
  }
  return (
    <View style={styles.containers}>
      <View style={styles.viewCard}>
        <Card
          containerStyle={styles.container}
        >

          <View style={styles.viewImg}>
            <IconAntDeisign
              name={colorStar}
              color='#ff5e00'
              size={25}
              style={{ position: 'absolute', top: 0, zIndex: 1, left: 0 }}
              onPress={changeStar}
            />
            <Image
              source={require('../../../../images/cards/clother.jpg')}
              style={styles.img}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <ProgressBarAndroid
              style={{ width: 80, marginTop: 20 }}
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.5}
              color='#ff5e00'
            />
          </View>
          <Text style={{ marginBottom: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
            {data.word_group_name}
          </Text>
          <Text style={{ marginBottom: 10, textAlign: 'center', fontWeight: 'bold', color: '#ff5e00' }}>
            {data.wg_vn_name}
          </Text>
          <Text style={{ marginBottom: 10, textAlign: 'center' }}>
            Help you master 28 words related to <Text style={{ fontStyle: 'italic', fontWeight: 'bold', }}>{data.wg_vn_name}</Text> in English
      </Text>

        </Card>
      </View>
      <View style={styles.viewTool}>
        <View style={styles.viewIcon}>
          <IconFeather style={styles.iconTool}
            name='copy'
          />
        </View>
        <View style={{ borderWidth: 0.25, borderColor: 'white', width: 25, marginTop: 3, marginBottom: 3 }}></View>
        <View style={styles.viewIcon}>
          <IconFeather style={styles.iconTool}
            name='edit'
          />
        </View>
        <View style={{ borderWidth: 0.25, borderColor: 'white', width: 25, marginTop: 3, marginBottom: 3 }}></View>
        <View style={styles.viewIcon}>
          <IconFontAwesome5 style={styles.iconTool}
            name='medal'
          />
        </View>
      </View>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnDetail}
          containerStyle={styles.btnDetail}
          title='DETAIL'
          onPress={onPress}
        />
      </View>
    </View>
  )
}

export default CardWordGroup; 