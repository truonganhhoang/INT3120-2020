import React from 'react';
<<<<<<< HEAD
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
=======
import { Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
>>>>>>> dc53f8409b520b6d01dc31df74be5130da7d3646
import { Card, Icon } from 'react-native-elements';
import styles from './style';
const topic_details = require('../../../../data/topic_detail.json');
const CardExtend = (props: {
  icon_top: any, img_top: any, vn_meaning: any, navigation?: any, topic_name: any, icon_type: any
}) => {
  const { icon_top, img_top, vn_meaning, topic_name, navigation, icon_type } = props;
  const onPress = () => {
    Object.keys(topic_details).forEach((item, index) => {
      if (item == topic_name) {
        navigation.navigate('WordGroupScreen', {nameTopic: topic_name});
      }
    });
  }
  return (
    <TouchableOpacity onPress={() => { onPress() }}>
      <Card
        title={topic_name}
        image={{ uri: img_top }}
        titleStyle={{ textTransform: 'uppercase', color: '#ff5e00' }}
      >
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon
              name={icon_top}
              color='#ff5e00'
              size={30}
              type={icon_type}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.nameCard}>{topic_name}</Text>
            <Text style={styles.vi}>{vn_meaning}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>

  );
}
export default CardExtend