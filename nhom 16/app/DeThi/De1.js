import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View,ScrollView,Button,Alert } from "react-native";


export default App1 = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView>
      <View>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
          <Text style={{marginBottom:15,fontSize:16,color:"#0404B4"}}> Câu 1 : Khái niệm đường bộ được hiểu như thế nào là đúng </Text>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}> Đường bộ , cầu đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Hầm đường bộ, bấn phà đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Đường cầu đường bộ hầm đường bộ và các công trình khác</Text>
          </View>
        </View>
        
      </View>
      <View>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
          <Text style={{marginBottom:15,fontSize:16,color:"#0404B4"}}> Câu 2 : Khái niệm đường bộ được hiểu như thế nào là đúng </Text>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}> Đường bộ , cầu đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>B:Hầm đường bộ, bấn phà đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>C:Đường cầu đường bộ hầm đường bộ và các công trình khác</Text>
          </View>
        </View>
        
      </View>
      <View>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
          <Text style={{marginBottom:15,fontSize:16,color:"#0404B4"}}> Câu 3 : Khái niệm đường bộ được hiểu như thế nào là đúng </Text>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}> Đường bộ , cầu đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Hầm đường bộ, bấn phà đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Đường cầu đường bộ hầm đường bộ và các công trình khác</Text>
          </View>
        </View>
        
      </View>
      <View>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
          <Text style={{marginBottom:15,fontSize:16,color:"#0404B4"}}> Câu 4 : Khái niệm đường bộ được hiểu như thế nào là đúng </Text>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}> Đường bộ , cầu đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Hầm đường bộ, bấn phà đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Đường cầu đường bộ hầm đường bộ và các công trình khác</Text>
          </View>
        </View>
        
      </View>
      <View>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
          <Text style={{marginBottom:15,fontSize:16,color:"#0404B4"}}> Câu 5 : Khái niệm đường bộ được hiểu như thế nào là đúng </Text>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}> Đường bộ , cầu đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Hầm đường bộ, bấn phà đường bộ</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox/>
            <Text style={{margin:8,fontSize:15}}>Đường cầu đường bộ hầm đường bộ và các công trình khác</Text>
          </View>
        </View>
        
      </View>
      <View style={{backgroundColor:'#000000',height:2,marginTop:10,marginBottom:20}}></View>

       <View style={{alignItems:"center"}}>
       <Button
          title="Nộp bài "
          onPress={() => Alert.alert('Số điểm của bạn là 2/5')}
        />
       <View style={styles.checkboxContainer}>
      
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>bạn có muốn nộp bài và xem kết quả</Text>
        </View>
      <View style={{marginBottom:30}}>
        <Text style={{fontSize:18,color:"#FF0040"}}> {isSelected ? "1:A - 2:B - 3:C - 4:A - 5:C" : ""}</Text>
        
      </View>
       </View>
    <View style={{backgroundColor:"#04B431",height:70, marginTop:-13}}><Text></Text></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  checkboxContainer: {
    
    alignItems:"center",
    flexDirection: "row",
    marginTop: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    fontSize:18 ,
    margin: 8,
  },
});