import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { Card, Icon, Image } from 'react-native-elements';
import styles from './style';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import * as Progress from 'react-native-progress';
const CardExtend = (props: {
  icon_top: any, img_top: any, vn_meaning: any, navigation?: any, topic_name: any, icon_type: any
}) => {
  const { icon_top, img_top, vn_meaning, topic_name, navigation, icon_type } = props;
  const onPress = () => {
    console.log('Go WordGroupScreen');
    navigation.navigate('WordGroupScreen', { nameTopic: topic_name });
  }
  return (
    <TouchableOpacity onPress={() => { onPress() }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: WIDTH - 10, margin: 5, position: 'relative' }}>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
          <View style={{justifyContent:'center'}}>
            <View style={{zIndex: 0}}>
              <Image
                source={{ uri: img_top }}
                style={{
                  height: 100,
                  width: WIDTH - 15,
                }} 
                PlaceholderContent={<ActivityIndicator size="small" color="#ff5e00"/>}
              />
            </View>
            <View style={{backgroundColor:'#000',width:WIDTH-15,height:100,position:'absolute',opacity:0.4,zIndex:1}}>
            </View>
            <View style={{ zIndex: 2, position: 'absolute' }}>
              <Icon
                name={icon_top}
                color='#fff'
                size={55}
                type={icon_type}
                iconStyle={{left:20}}
              />
            </View>
            <View style={{ zIndex: 2, position: 'absolute',right:20,top:20,justifyContent:'center',alignItems:'center',width:150 }}>
              <Text style={styles.nameCard}>{topic_name}</Text>
              <Text style={styles.vi}>{vn_meaning}</Text>
              <Progress.Bar progress={0} width={70}  color="#eaeaea" height={4} style={{backgroundColor:'#eaeaea',marginTop:10}}/>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CardExtend