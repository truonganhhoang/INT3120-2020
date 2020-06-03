import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MiniSearch from "minisearch";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


import Word from "../components/Word";
import Spinner from "../components/Spinner";

const deviceWidth = Dimensions.get("window").width;
const screen = (precent) => (precent * deviceWidth) / 100;

export default function ListWord({ navigation, route }) {
  const { id, navigateCourse } = route.params;
  const [list, setList] = useState();
  const [cloneList, setCloneList] = useState();
  const [searchValue, setSearchValue] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const typingTimeOut = useRef(null);
  useEffect(() => {
    const queryString = `http://localhost:3000/courses/${id}`;
    axios
      .get(queryString)
      .then((res) => {
        const { id, courseName, listWord } = res.data;
        setList(listWord);
        setCloneList(listWord);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [route.params]);

  useEffect(() => {
    if (typeof list == "undefined" || typeof searchValue =="undefined" ) return; //ignore componentDidMount
    //Debounce

    //Clear previous timeOut
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }

    typingTimeOut.current = setTimeout(() => {   
      
      if (searchValue.trim() == "") {
        setList(cloneList);
        return;
      }
      const miniSearch = new MiniSearch({
        fields: ["mean", "word"], // fields to index for full-text search
        storeFields: ["word", "mean", "miss", "level", "mems", "id"], // fields to return with search results
      });

      miniSearch.addAll(cloneList);
      let result = miniSearch.search(searchValue.trim());
      setList(result); // be careful this line .it can cause the bug
    }, 300);

  });

  function onChangeText(text) {
    text = text.toLocaleLowerCase();
    setSearchValue(text);
  }

  function onPressNavigateWordDetail(wordId, id) {
    return navigation.navigate("WordDetail", {
      wordId: wordId, // de nguyen wordI d
      id: id,
    });
  }
  function onPressNavigateReview(){
    return navigation.navigate("Review",{
      listWord:list,
      id: id,
      courseName:navigateCourse[0].courseName
    }) ;
  }


  return (
    <View style={styles.container}>
      {(!isLoading && (
        <View style={styles.wrap}>
          
          <SearchBar
            lightTheme
            placeholder="Search"
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
            <TouchableOpacity 
            onPress={onPressNavigateReview}
            >
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
  inputContainerStyle: {
    backgroundColor: "#ffffff",
  },
});