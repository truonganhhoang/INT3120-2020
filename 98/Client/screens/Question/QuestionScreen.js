import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';


export default function QuestionScreen() {

  return (
   <View>
                <Image style={styles.img} source={require('../../assets/images/home/menu.jpg')} />               
        </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  
});
