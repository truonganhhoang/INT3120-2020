import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

import { CardExtend } from '../../components/Card';
import { SettingButton } from '../../components/SettingButton';
import { StarButton } from '../../components/StarButton';
import { Header } from 'react-native-elements';
const styles = StyleSheet.create({
  stretch: {
    width: 500,
    height: 1920,
    resizeMode: 'stretch'
  },
  setting: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 10,
    paddingTop: 10
  },
  favorite: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 10,
    paddingTop: 10,
  },
  logo: {
    alignItems: 'center',
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    paddingTop: 5,
    marginBottom: 10,
    borderBottomColor: '#6666667a',
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: '#2089dc'
  },
  container: {
    //backgroundColor: '#f8a136'
    backgroundColor: 'white',
    paddingBottom: 70
  }
});
const BackgroudUrl = "../../../../images/logo.png";
const cardProps = [
  {
    name: "People",
    image: "../../../../images/cards/people.jpg",
    icon: 'users',
    vi: 'Con người'
  },
  {
    name: "Home",
    image: '../../../../images/cards/home.jpg',
    icon: 'home',
    vi: 'Nhà cửa'
  },
  {
    name: "Health",
    image: '../../../../images/cards/health.jpg',
    icon: 'heartbeat',
    vi: 'Sức khỏe'
  },
  {
    name: "Shopping",
    image: '../../../../images/cards/shopping.jpg',
    icon: 'shopping-basket',
    vi: 'Mua sắm'
  },
  // {
  //   name: "Food",
  //   image : '../../../../images/cards/food.jpg',
  //   icon:'fish'
  // },
  {
    name: "Study",
    image: '../../../../images/cards/study.jpg',
    icon: 'graduation-cap',
    vi: 'Học tập'
  },
  // {
  //   name: "Eating out",
  //   image : '../../../../images/cards/eatingout.jpg',
  //   icon:'candy-cane'
  // },
  {
    name: "Leisure",
    image: '../../../../images/cards/leisure.jpg',
    icon: 'umbrella',
    vi: 'Giải trí'
  },
  {
    name: "Environment",
    image: '../../../../images/cards/environment.jpg',
    icon: 'globe',
    vi: 'Môi trường'
  }
];
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
        {cardProps.map(e =>
          <CardExtend
            nameCard={e.name}
            imageCard={e.image}
            icon={e.icon}
            key={e.name}
            vi={e.vi}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default StartScreen