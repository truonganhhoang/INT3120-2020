import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import Word from "../components/Word";

import { SearchBar, Button } from "react-native-elements";
import MiniSearch from "minisearch";
import { listWordData } from "../Data";

const deviceWidth = Dimensions.get("window").width;
const screen = (precent) => (precent * deviceWidth) / 100;
const courseId = 1;
export default function ListWord({ navigation }) {
  const [list, setList] = useState(listWordData);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    // full text search owr day
    const queryString = `http://localhost:3000/courses?courseId=${courseId}`;

    axios.get(queryString).then((res)=>{
        const {courseId, courseName , listWord} = res.data[0];
        setList(listWord);   

    }).catch(err=>console.log(err));
  }, []);

  function onChangeText(text) {
    text = text.toLocaleLowerCase().trim();
    setSearchValue(text);
    if (text == "") {
      setList(listWordData);
      return;
    }
    const miniSearch = new MiniSearch({
      fields: ["mean", "word"], // fields to index for full-text search
      storeFields: ["word", "mean", "miss", "level", "mems"], // fields to return with search results
    });

    miniSearch.addAll(listWordData);
    let result = miniSearch.search(text);

    setList(result);
  }
  
  function onPress(id,courseId){
  //  console.log(id,' course id ' ,courseId)
    return  navigation.navigate("WordDetail" ,{ wordId : id ,courseId:courseId });
  }

  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        placeholder="何か調べているか"
        ContainerStyle={{
          height: 40,         
          backgroundColor: "#ffffff",
          marginBottom: 30,
       
        }}
        inputContainerStyle={{
          backgroundColor:'#ffffff',
          
        }}
        onChangeText={(text) => onChangeText(text)}
        value={searchValue}
      />

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Word word={item} courseId={{courseId}} onPress={onPress} />
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
    borderBottomColor: "#ffa222",
    borderBottomWidth: 10,
  },
  review: {
    textTransform: "uppercase",
    paddingLeft: 30,
    fontWeight: "500",
    fontSize: 30,
  },
});
