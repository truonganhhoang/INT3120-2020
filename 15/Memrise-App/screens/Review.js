import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, FlatList, Button } from "react-native";
import * as Progress from "react-native-progress";
import WordContainer from "../components/WordContainer";
import ReviewWord from "../components/ReviewWord";
import Mems from "../components/Mems";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenwidth = Math.round(Dimensions.get("window").width);
var testData = [
  { id: 1, word: "ありがとう", mean: "cảm ơn ", miss: false, level: 0 },
  { id: 2, word: "車", mean: "xe hơi", miss: false, level: 0 },
  { id: 3, word: "野菜", mean: "rau", miss: true, level: 1 },
  { id: 4, word: "指輪", mean: "nhẫn", miss: true, level: 2 },
  { id: 5, word: "なべ", mean: "nồi", miss: false, level: 3 },
  { id: 6, word: "果物", mean: "hoa quả", miss: true, level: 4 },
  { id: 7, word: "物", mean: "vât", miss: true, level: 4 },
  { id: 8, word: "庭鶏", mean: "con gà", miss: true, level: 4 },
  { id: 9, word: "犬", mean: "cho", miss: true, level: 4 },
  { id: 10, word: "ミカン", mean: "quyt", miss: true, level: 4 },
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Review({ navigation, route }) {
  const [check, setCheck] = useState(() => {
    let arr = [];
    testData.forEach(() => {
      arr.push("waiting");
    });
    return arr;
  }); 

  const [reviews, setReviews] = useState(() => shuffle(testData)); //mang chua nhung tu se hoc
  const [trueAnswer, setTrueAnswer] = useState(reviews[reviews.length - 1]); // tu duoc chon
  const [choices, setChoices] = useState(() => {
    let falseAnser = testData.filter((idex) => idex.id !== trueAnswer.id);
    shuffle(falseAnser);
    let choiceArray = [...falseAnser.slice(0, 5)];
    choiceArray.push(trueAnswer);
    shuffle(choiceArray);
    return choiceArray;
  }); // mang chua nhung tu hien ra
  const [hideMean, setHideMean] = useState(true); //sau khi tra loi hien nghia
  const [hideMemScreen, setHideMemScreen] = useState(true); // minh chon dap an dung hay sai

  function handleOnPress(objWord, index) {
    if (objWord.id === trueAnswer.id) {
      //update green for choice's box which is true
      var box = [
        ...check.slice(0, index),
        "correct",
        ...check.slice(index + 1),
      ];
      setCheck(box);

      // update  word's level

      //----------------------
      //show mean of the word
      setHideMean(false);
    } else {
      let box = [
        ...check.slice(0, index),
        "incorrect",
        ...check.slice(index + 1),
      ];

      setCheck(box);
      setHideMean(false);

      setTimeout(() => setHideMemScreen(false), 1500);

    }
  }

  // Review next's word
  function onPressNextWord() {
    if (hideMemScreen === false) {
      setHideMemScreen(true);
      setCheck(() => {
        let arr = [];
        testData.forEach(() => {
          arr.push("waiting");
        });
        return arr;
      });

      setHideMean(true);
      setReviews(reviews);
      
    } else {
      //if your answer is True

      // display choice box
      setHideMemScreen(true);
      // update all color of box is white
      setCheck(() => {
        let arr = [];
        testData.forEach(() => {
          arr.push("waiting");
        });
        return arr;
      });

      //update Reviews Array
      reviews.pop();
      let tempReviews = [...reviews];
      let newTrueAnswer = reviews[reviews.length - 1];
      setReviews(tempReviews);
      //set True Anser
      setTrueAnswer(newTrueAnswer);
      // update choice Array
      let falseAnser = testData.filter((idex) => idex.id !== newTrueAnswer.id);
      shuffle(falseAnser);
      let choiceArray = [...falseAnser.slice(0, 5)];
      choiceArray.push(newTrueAnswer);
      shuffle(choiceArray);
      setChoices(choiceArray);
      setHideMean(true);
    }
  }

  const _renderItem = ({ item, index }) => {
    return (
      <ReviewWord
        wordObj={item}
        index={index}
        onPress={handleOnPress}
        check={check[index]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={1.00 - reviews.length / testData.length}
        width={screenwidth}
      />
      <WordContainer objWord={trueAnswer} hideMean={hideMean} />

      {(hideMemScreen && (
        <FlatList
          data={choices}
          renderItem={_renderItem}
          keyExtractor={(item) => `${item.id}`}
          numColumns={2}
          contentContainerStyle={styles.ReviewContainer}
          scrollEnabled={false}
        />
      )) || <Mems />}

      <View style={styles.footer}>
        <Button
          onPress={onPressNextWord}
          title="Next"
          color="#841584"
          style={styles.NextButton}
        />
      </View>
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  ReviewContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
    paddingTop: 0,
  },
  footer: {
    position: "absolute",
    top: screenHeight - 150,
    paddingLeft: 50,
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
});
