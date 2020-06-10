import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View,Image } from "react-native";
import anh from '../assets/anh.jpg';

export default App1 = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);

  return (
    <View>
        <Image  style={{width:"100%"}}  source={anh}/>
        <View style={{alignItems:"center",marginTop:25,marginBottom:-20}}><Text style={{margin:10,fontSize:18,color:"#0404B4"}}> ĐÁNH GIÁ ỨNG DỤNG
        </Text></View>
        <View style={styles.container}>
         
         <View style={styles.checkboxContainer}>
           <CheckBox
             value={isSelected}
             onValueChange={setSelection}
             style={styles.checkbox}
           />
           <Text style={styles.label}>Đánh giá 1 like cho ứng dụng nếu bạn thấy nó thực sự hữu ích với mình</Text>
         </View>
         <Text style={{fontSize:18}}>Trạng thái đánh giá của bạn: {isSelected ? "👍" : ""}</Text>
         <Text style={{fontSize:18,marginTop:15}}>Số lượng like: {isSelected ? "1" : "0"}</Text>

         <View style={{backgroundColor:'#000000',height:2,marginTop:10}}></View>

         <View style={styles.checkboxContainer}>
           <CheckBox
             value={isSelected1}
             onValueChange={setSelection1}
             style={styles.checkbox}
           />
           <Text style={styles.label}>Đánh giá 1 like cho ứng dụng nếu bạn thấy nó thực sự hữu ích với mình</Text>
         </View>
         <Text style={{fontSize:18}}>trạng thái đánh giá của bạn: {isSelected1 ? "👎" : ""}</Text>
         <Text style={{fontSize:18,marginTop:15}}>Số lượng dislike: {isSelected1 ? "1" : "0"}</Text>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    alignItems: "center",
    justifyContent: "center",
    margin:40
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize:18
  },
});
