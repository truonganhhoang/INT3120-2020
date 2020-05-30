import React, { useState, useEffect } from "react";
import axios from "axios";
import MiniSearch from "minisearch";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import Word from "../components/Word";

import { SearchBar } from "react-native-elements";

import { listWordData } from "../Data";
import Spinner from "../components/Spinner";
import { TouchableOpacity } from "react-native-gesture-handler";

const deviceWidth = Dimensions.get("window").width;
const screen = (precent) => (precent * deviceWidth) / 100;

export default function ListWord({ navigation, route }) {
  const { id, navigateCourse } = route.params;
  
  const [list, setList] = useState();
  const [searchValue, setSearchValue] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const queryString = `http://localhost:3000/courses/${id}`;
   
    axios
      .get(queryString)
      .then((res) => {    
        const { id, courseName, listWord } = res.data;      
        setList(listWord);
        setIsLoading(false);
        console.log(`axios lw , word` ,listWord[0])
      })
      .catch((err) => console.log(err));
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

  function onPressNavigateWordDetail(wordId, id) {    
    return navigation.navigate("WordDetail", {
      wordId: wordId,
      id: id,
    });
  }

  return (
    <View style={styles.container}>
      {(!isLoading && (
        <View style={styles.wrap}>
          <SearchBar
            lightTheme
            placeholder="何か調べているか"
            ContainerStyle={styles.searchbar}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={(text) => onChangeText(text)}
            value={searchValue}
          />

          <FlatList
            data={list}
            renderItem={({ item }) => (
              <Word
                word={item}
                id={{ id }}
                onPress={onPressNavigateWordDetail}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate("Review")}>
              <Text style={styles.review}>Review now !!!</Text>
            </TouchableOpacity>
          </View>
        </View>
      )) || <Spinner />}
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  container: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  footer: {
    position: "absolute",
    bottom: screen(10),
    left: screen(-5),
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
  searchbar: {
    height: 40,
    backgroundColor: "#ffffff",
    marginBottom: 30,
  },
  inputContainerStyle:{
    backgroundColor: "#ffffff",
  }
});
