import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

import WordContainer from "../components/WordContainer";
import ReviewWord from "../components/ReviewWord";

var testData = [
  {
    id: 1,
    word: "ありがとうございます",
    mean: "cảm ơn ",
    miss: false,
    level: 0,
  },
  { id: 2, word: "車", mean: "xe hơi", miss: false, level: 0 },
  { id: 3, word: "野菜", mean: "rau", miss: true, level: 1 },
  { id: 4, word: "指輪", mean: "nhẫn", miss: true, level: 2 },
  { id: 5, word: "なべ", mean: "nồi", miss: false, level: 3 },
  { id: 60, word: "果物", mean: "hoa quả", miss: true, level: 4 },
];

const boxBackGroundColor = {
  correct: "#1a3",
  incorrect: "#e13",
  waiting: "#eee",
};

//
function Test(props) {
  var { check, op } = props;
  return (
    <View>
      <Text onPress={() => op()}> {check}</Text>
    </View>
  );
}

export default function Review({ navigation, route }) {
  const [check, setCheck] = useState(() => {
    let arr = [];
    testData.forEach(() => {
      arr.push("waiting");
    });
    return arr;
  });
  // const [check, setCheck] = useState('waiting');

  // van de la ko check ko thay doi

  function handleOnPress(objWord) {
    
    const index = testData.indexOf(objWord);
    if (index == -1) return;
    console.log(index);
    var box = [...check.slice(0,index) , 'correct',...check.slice(index+1 ) ];
    setCheck(box);
    console.log(check[index]);
    // =/======
    // const index = testData.indexOf(objWord);
    // if (index == -1) return;
    // console.log(index);
    // var box = check;
    // box.splice(index, 1, "correct");
    // setCheck(box);
    // console.log(check[index]);
    

  }

  const _renderItem = ({ item, index }) => {
    return (
      // <ReviewWord wordObj={item} onPress={handleOnPress} check={check} />
      <ReviewWord wordObj={item} onPress={handleOnPress} check={check[index]} />
    );
  };

  

  return (
    <View style={styles.container}>
      <WordContainer objWord={testData[2]} hideMean={true} />
  

      <FlatList
        data={testData}
        renderItem={_renderItem}
        keyExtractor={(item) => `${item.id}`}
        numColumns={2}
        contentContainerStyle={styles.ReviewContainer}
        scrollEnabled={false}
      />
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
  ReviewContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 0,
  },
});
