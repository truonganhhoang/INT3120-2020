import React from "react";
import { Text, Image, View, StyleSheet} from "react-native";


import wavingplant from '../assets/tenor.gif';


export default function Statistic(props) {
   const {chosenTrue , chosenFalse } =props.statistic
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={wavingplant} />

       <Text style={styles.textStatistic}> 
          Review Statistic 
       </Text> 
       
       <Text style={styles.textResults}> 
           <Text style={{color:"green"}}>True:     </Text>
         {chosenTrue}
       </Text> 
       
       <Text style={styles.textResults}> 
       <Text style={{color:"red"}}>False:     </Text> {chosenFalse}
       </Text> 
       
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "",
    flex: 1,
 
  },
  textStatistic: {
      color :"#0ab",
    fontSize: 40,
  },
  textResults: {   
    fontSize: 25,
    marginVertical:10,
  },


  image:{
    marginVertical:30
  }
});
