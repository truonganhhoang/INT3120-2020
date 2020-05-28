import React, { useState, useEffect,useRef } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import Word from "../components/Word";

import { SearchBar, Button } from 'react-native-elements';
import MiniSearch from "minisearch";
import { listWordData } from "../Data";


const deviceWidth = Dimensions.get('window').width;
const screen = (precent) => precent * deviceWidth/100;

export default function ListWord({ navigation }) {
  const [list, setList] = useState(listWordData);
  const [searchValue, setSearchValue] = useState();


  // useEffect(()=>{
  //   // setSearchValue(searchValue)
  //   // full text search owr day 
    
  // },[searchValue])

  function onChangeText(text){
    
    text = text.toLocaleLowerCase().trim();
    setSearchValue(text);
    if (text ==''){
      setList(listWordData);
      return;
    }
    const miniSearch = new MiniSearch({
      fields: ["mean", "word"], // fields to index for full-text search
      storeFields: [ "word" ,"mean" , "miss" , "level" ,"mems"], // fields to return with search results
    });
    
    miniSearch.addAll(listWordData);
    let result = miniSearch.search(text);
       

    setList(result);
  }

  
  return (
    <View style={styles.container}>

      <SearchBar
          lightTheme
          placeholder='何か調べているか'
        inputContainerStyle={{
          height: 40,
         //  borderColor: "gray",
          borderWidth: 1,
          backgroundColor: 'white',
          marginBottom: 30,

        }}
        onChangeText={(text) => onChangeText(text)}
        value={searchValue}
      />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Word unit={item} onPress={() => navigation.navigate("WordDetail")} />
        )}
        keyExtractor={(item) => `${item.id}`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <Text
          style={styles.review}
          onPress={() => navigation.navigate("Review")}
        >
          Review now !!!
        </Text>
      </View>
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  header: {
    paddingTop: 50,
    backgroundColor: "#0ab",
    height: 100,
  },
  footer: {
    position: "absolute",
    bottom: screen(10),
    height: 70,
    width: screen(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff222",
    borderRadius: 50,
    borderBottomColor:"#ffa222",
    borderBottomWidth:10,
  },  
  review: {
    textTransform: "uppercase",
    paddingLeft: 30,
    fontWeight: "500",
    fontSize: 30,
  },
});
