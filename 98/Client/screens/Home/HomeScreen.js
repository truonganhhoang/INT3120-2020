import * as React from 'react';
import { StyleSheet, View,Button,Image  } from 'react-native';
import HomeItems from '../../components/Home/HomeItems';



export default function HomeScreen(props) {
const {navigation}=props;
  return (
    <View style={styles.container}>
       <View>
                <Image style={styles.img} source={require('../../assets/images/home/menu.jpg')} />               
        </View>
       
    <HomeItems
        navigation={navigation}
    />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
        width: null,
        height: 200,
        resizeMode: 'cover',
  },
});
