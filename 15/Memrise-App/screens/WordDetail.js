import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Button } from "react-native";

import Word from "../components/Word";
import WordContainer from "../components/WordContainer";
import Spinner from "../components/Spinner";

export default function listWord({ navigation, route }) {
  // React.useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);

  const [word, setWord] = useState({});
  const [courseInfor, setCourseInfor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { wordId, id } = route.params;
    const queryString = `http://localhost:3000/courses/${id}`;
    axios
      .get(queryString)
      .then((res) => {
        const { id, courseName, listWord } = res.data;

        const newWord = listWord.filter((w) => w.wordId === wordId);

        setWord(newWord[0]);

        setIsLoading(false);

        setCourseInfor({
          listWord: listWord,
          courseName: courseName,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleOnThunderPress() {
    console.log("handleOnThunderPress(); run");

    const { wordId, id } = route.params;
    const { listWord, courseName } = courseInfor;

    // change miss
    //============
    let newWord = listWord.filter((wd) => wd.wordId === wordId)[0];
    const index = listWord.indexOf(newWord);
    const miss = newWord.miss;
    newWord = {
      ...newWord,
      miss: !miss,
    };
    let newListWord = [
      ...listWord.slice(0, index),
      newWord,
      ...listWord.slice(index + 1),
    ];

    const putData = {
      courseName: courseName,
      listWord: newListWord,
    };
    // ============

    const queryString = `http://localhost:3000/courses/${id}`;
    axios
      .put(queryString,putData)
      .then(res => console.log('success'))
      .catch((error) => console.log(error));

    return true;
  }

  return (
    <View style={styles.container}>
      {(isLoading && <Spinner />) || (
        <View>
          <WordContainer
            objWord={word}
            hideMean={false}
            handleOnThunderPress={handleOnThunderPress}
          />

          <View style={styles.Mem}>
            <Button
              title="Create a new Mems"
              onPress={() => {
                navigation.navigate("AddMem");
              }}
            />

            <View style={styles.MemText}>
              <Text>đăng luc =))</Text>

              <Text
                style={{
                  paddingTop: 3,
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                {" "}
                - Nguyễn Văn A
              </Text>
            </View>

            <View style={styles.MemText}>
              {/* <Text>{route.params?.post}</Text> */}
              <Text
                style={{
                  paddingTop: 3,
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                {" "}
                - Nguyễn Văn A
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  DetailsBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginBottom: 30,
  },
  WordContainer: {
    flexGrow: 1,
  },
  ThunderWater: {
    flexDirection: "row",
  },
  WordImage: {
    width: 65,
    height: 65,
    backgroundColor: "green",
    // borderStyle:'solid',
    borderWidth: 0.5,
    borderRadius: 80,
  },
  ThunderImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    opacity: 0.4,
  },
  WaterImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    marginLeft: "auto",
  },
  Mem: {
    padding: 30,
  },
  MemText: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    // borderStyle:'solid',
  },
  Word: {
    textTransform: "lowercase",
    fontWeight: "700",
    fontSize: 30,
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    fontSize: 15,
  },
  Title: {
    paddingTop: 30,
    paddingBottom: 5,
    color: "red",
    fontWeight: "500",
    fontSize: 15,
  },
});
