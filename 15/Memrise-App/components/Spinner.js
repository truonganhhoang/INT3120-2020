import React from "react";
import { Text, Image, View, StyleSheet, ActivityIndicator } from "react-native";


import flowergrow from '../assets/flowergrow.gif';
import loading from '../assets/loading.gif'

export default function Spinner(props) {
   
  return (
    <View style={styles.container}>
      <Image source={flowergrow} />
      {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      <Image style={styles.image} source={loading} />
      {/* <Text style={styles.text}> 
      L o a d i n g ....
       </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
 
  },
  text: {
    fontSize: 30,
  },
  image:{
    height :60,
    
  }
});
