import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, FlatList, Text } from "react-native";
import * as Progress from "react-native-progress";
import axios from "axios";

import WordContainer from "../components/WordContainer";
import ReviewWord from "../components/ReviewWord";
import Mems from "../components/Mems";
import { TouchableOpacity } from "react-native-gesture-handler";
import Statistic from "../components/Statistic";

const deviceWidth = Dimensions.get("window").width;
const screen = (percent) => (percent * deviceWidth) / 100;

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
  const listWord = route.params.listWord;
  const [check, setCheck] = useState(() => {
    let arr = [];
    listWord.forEach(() => {
      arr.push("waiting");
    });
    return arr;
  });
  const [statistic, setStatistic] = useState({
    chosenTrue: 0,
    chosenFalse: 0,
  });
  const [reviews, setReviews] = useState(() => shuffle(listWord)); //mang chua nhung tu se hoc
  const [trueAnswer, setTrueAnswer] = useState(reviews[reviews.length - 1]); // tu duoc chon
  const [choices, setChoices] = useState(() => {
    let falseAnser = listWord.filter((idex) => idex.id !== trueAnswer.id);
    shuffle(falseAnser);
    let choiceArray = [...falseAnser.slice(0, 5)];
    choiceArray.push(trueAnswer);
    shuffle(choiceArray);
    return choiceArray;
  }); // mang chua nhung tu hien ra

  const [hideMean, setHideMean] = useState(true); //sau khi tra loi hien nghia
  const [hideMemScreen, setHideMemScreen] = useState(true); // minh chon dap an dung hay sai (check dap an minh chon)


  useEffect(() => {
    
    if (hideMean === false  ) {
      const courseName = route.params.courseName;
      const id = route.params.id;
      const newList = listWord.filter((word) => word.id !== trueAnswer.id);
      // Because newList is Array so address is first index, we can push in last array .
      newList.push(trueAnswer);

      const newCourse = {
        courseName: courseName,
        listWord: newList,
      };

      const queryString = `http://localhost:3000/courses/${id}`;
      axios
        .put(queryString, newCourse)
        .then((res) => {
          console.log(" update word in review success");
        })
        .catch((error) => console.log(error));
    }
  }, [statistic]);

  function handleOnPress(objWord, index) {
    if(reviews.length<=0) return;
    if (objWord.id === trueAnswer.id) {
      //update green for choice's box which is true
      var box = [
        ...check.slice(0, index),
        "correct",
        ...check.slice(index + 1),
      ];
      setCheck(box);

      // update  word  (level , miss)
      let newTrueAnswer = {
        ...trueAnswer,
        miss: false,
      };

      if (trueAnswer.level < 5) {
        newTrueAnswer = {
          ...newTrueAnswer,
          level: ++trueAnswer.level,
        };
      }
      setTrueAnswer(newTrueAnswer);

      let newStatistic = {
        ...statistic,
        chosenTrue: ++statistic.chosenTrue,
      };
      setStatistic(newStatistic);

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

      // Update  word when it false

      let newTrueAnswer = {
        ...trueAnswer,
        miss: true,       
      };
      if(trueAnswer.level>0){
        newTrueAnswer = {
          ...trueAnswer,
          miss: true, 
          level: --trueAnswer.level      
        };
      }
      setTrueAnswer(newTrueAnswer);

      let newFalse =++statistic.false;
      let newStatistic = {
        ...statistic,
        chosenFalse: ++statistic.chosenFalse,
      };
      setStatistic(newStatistic);
      //----------------------

      setTimeout(() => setHideMemScreen(false), 1500);
    }
  }

  // Review next's word
  function onPressNextWord() {
    if(reviews.length<= 0)return;

    if (hideMemScreen === false) {
      setHideMemScreen(true);
      setCheck(() => {
        let arr = [];
        listWord.forEach(() => {
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
        listWord.forEach(() => {
          arr.push("waiting");
        });
        return arr;
      });

      //update Reviews Array
      reviews.pop();
      if(reviews.length==0) return;
      let tempReviews = [...reviews];
      let newTrueAnswer = reviews[reviews.length - 1];
      setReviews(tempReviews);
      //set True Anser
      setTrueAnswer(newTrueAnswer);
      // update choice Array
      let falseAnser = listWord.filter((idex) => idex.id !== newTrueAnswer.id);
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
        progress={1.0 - reviews.length / listWord.length}
        width={screen(100)}
      />
      { reviews.length > 0 && (
      
      <View>

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
          )) || <Mems word={trueAnswer} />}      

      </View> )
      ||(<Statistic statistic ={statistic} />)
      }
      
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressNextWord}>
          {reviews.length <= 1 && 
            <Text style={styles.nextButton}>Done</Text>
           || <Text style={styles.nextButton}>Next</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ReviewContainer: {
    paddingLeft: screen(2),
    paddingTop: screen(20),
  },
  footer: {
    position: "absolute",
    right: screen(40),
    bottom: screen(10),
  },
  nextButton: {
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 30,
    color: "#0ab",
  },
  MemText: {
    borderBottomWidth: 0.2,
    // borderStyle:'solid',
  },
});
