import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ProgressBarAndroid } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';


const CardExtend = (props: { nameCard?: any; imageCard?: any; 
  icon?: any; navigation?: any; vi?: any 
  wordGroups?: any
}) => {

  const { nameCard, navigation, icon, vi, imageCard, wordGroups } = props;

  const users = [
    {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
  ]
  const onPress = () => {
    console.log(nameCard)
    navigation.navigate('WordGroupScreen', {nameTopic: nameCard, wordGroups: wordGroups});
  }
  return (
    <TouchableHighlight onPress={() => { onPress() }}>
      <Card
        title={nameCard}
        image={require('../../../../images/cards/home.jpg')}
        titleStyle={{ textTransform: 'uppercase',color:'#ff5e00' }}
      >
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon
              name={icon}
              color='#ff5e00'
              size={30}
              type="font-awesome"
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.nameCard}>{nameCard}</Text>
            <Text style={styles.vi}>{vi}</Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.5}
              color='#ff5e00'
            />
          </View>
        </View>
      </Card>
    </TouchableHighlight>

  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOpacity: 0.1,
    borderRadius: 4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black'
  },
  title: {
    textTransform: "uppercase",
    marginTop: 8,
  },
  icon: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft:10
  },
  text: {
    alignItems: 'flex-end',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginRight:5
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
    alignItems: 'center',
    flex: 1
  },
  nameCard: {
    alignItems: 'center',
    color: '#ff5e00',
    fontSize: 20,
    fontWeight: '700',
  },
  vi: {
    color: '#ff5e00'
  }
});
export default CardExtend