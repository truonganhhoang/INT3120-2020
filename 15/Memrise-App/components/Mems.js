import React, { useState, useEffect } from "react";
import { StyleSheet,Text, View, Button } from "react-native";

function Mems() {
  return (
    <View style={styles.Mem}>
         <Text style ={ {textAlign:'center' , fontSize:20 , fontWeight:'50' ,color:'blue', marginBottom :30} }>Let's us help you Remember</Text>

      <View style={styles.MemText}>
        <Text>tu nay nen nghe nhu nay </Text>
        <Text
          style={{ paddingTop: 3, fontStyle: "italic", textAlign: "right" }}
        >
          - Nguyễn Văn A
        </Text>
      </View>

      <View style={styles.MemText}>
       <Text>konichiwa la con chim bay qua</Text>
        <Text
          style={{ paddingTop: 3, fontStyle: "italic", textAlign: "right" }}
        >
          - Nguyễn Văn A
        </Text>
      </View>
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  Mem: {
    padding: 30,
  },
  MemText: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    // borderStyle:'solid',
  },
});

export default Mems;
