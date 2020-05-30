import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  BackHandler,
  ClippingRectangle,
  ScrollView,
} from "react-native";
import appIcons from "../../constants/appIcons";
import appColors from "../../constants/colors";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { CheckBox } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const data = [
  {
    question: "Vạch kẻ đường được hiểu thế nào là đúng ?",
    ans: [
      "Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.",
      "Tất cả ý trên.",
    ],
    correct: [0],
    explain:
      'Vạch kẻ đường không tính vị trí đỗ, chỉ xét vị trí dừng.\nĐáp án 2 sai vì có "đỗ trên đường".\nĐáp án đúng 1',
  },
  {
    question: `Khái niệm "đường bộ" được hiểu như thế nào là đúng ?`,
    ans: [
      "Đường, cầu đường bộ.",
      "Hầm đường bộ, bến phà đường bộ.",
      "Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác.",
    ],
    correct: [0, 1],
    explain:
      "Đường bộ không bao gồm các công trình phụ trợ khác.\nĐáp án đúng là 1 và 2.",
  },
  {
    question:
      "Người điều khiển xe mô tô, xe gắn máy trên đường mà trong máu có nồng độ cồn vượt quá bao nhiêu thì bị cấm ?",
    ans: [
      "Nồng độ cồng vượt quá 50 miligam/100 mililit máu.",
      "Nồng độ cồn vượt quá 40 miligam/100 mililit máu.",
      "Nồng độ cồn vượt quá 30 miligam/100 mililit máu.",
    ],
    correct: [0],
    explain:
      "Lái xe máy thì nồng độ cồn vượt quá 50 miligam/100 mililit máu thì bị cấm.\nRiêng với ô tô, máy kéo, xe máy chuyên dụng thì chỉ cần trong máu có nồng độ cồn thì bị cấm.\nĐáp án đúng: 1",
  },
  {
    question:
      "Người điều khiển xe mô tô, xe gắn máy trên đường mà trong khí thở có nồng độ cồn vượt quá bao nhiêu thì bị cấm ?",
    ans: [
      "Nồng độ cồng vượt quá 0.25 miligam/1 lít khí thở.",
      "Nồng độ cồn vượt quá 0.20 miligam/1 lít khí thở.",
      "Nồng độ cồn vượt quá 0.15 miligam/1 lít khí thở.",
    ],
    correct: [0],
    explain:
      "Lái xe máy thì nồng độ cồn vượt quá 0.25 miligam/1 lít khí thở thì bị cấm.\nRiêng với ô tô, máy kéo, xe máy chuyên dụng thì chỉ cần trong khí thở có nồng độ cồn thì bị cấm.\nĐáp án đúng: 1",
  },
];

function Item({ data }) {
  const [isCorrect, setIsCorrect] = useState(false);

  const [ans, setAns] = useState(Array(data.ans.length).fill(-1));

  const handle = (index) => {
    //compare2Array(ans,item.ans ) && setIsCorrect(true);
    if (data.correct.length === 1) {
      //reset ans to -1
      let temp = [...ans];
      temp.fill(-1);
      if (data.correct.includes(index)) {
        temp[index] = 1;
        setAns(temp);
        setIsCorrect(true);
      } else {
        temp[index] = 0;
        setAns(temp);
        setIsCorrect(false);
      }
    } else {
      //reset only not correct

      let temp = ans.map((item, index, items) => {
        return item === 0 ? -1 : item;
      });

      if (data.correct.includes(index)) {
        temp[index] = 1;
        let numCorr = temp.reduce((ini, item, index, items) => {
          return item === 1 ? (ini += 1) : ini;
        }, 0);
        numCorr === data.correct.length
          ? setIsCorrect(true)
          : setIsCorrect(false);
        setAns(temp);
      } else {
        temp[index] = 0;
        setIsCorrect(false);
        setAns(temp);
      }
    }
  };
  return (
    <ScrollView style={itemStyle.container}>
      <Text style={{ padding: 10, paddingTop: 15, fontWeight: "bold" }}>
        {data.question}
      </Text>
      {data.ans.map((item, index, items) => (
        <TouchableOpacity
          onPress={() => handle(index)}
          key={index}
          style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor:
                ans[index] === -1
                  ? "white"
                  : ans[index] === 0
                  ? "red"
                  : appColors.appGreen,
              justifyContent: "center",
              alignItems: "center",
              borderColor: ans[index] === -1 ? "black" : "white",
            }}
          >
            <Text
              style={{
                color: ans[index] === -1 ? "black" : "white",
              }}
            >
              {index}
            </Text>
          </View>
          <Text
            style={{
              color:
                ans[index] === -1
                  ? "black"
                  : ans[index] === 0
                  ? "red"
                  : "green",
              paddingHorizontal: 10,
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
      {isCorrect && (
        <View style={{ paddingLeft: 10 }}>
          <Text
            style={{ paddingBottom: 5, paddingTop: 10, fontWeight: "bold" }}
          >
            GIẢI THÍCH ĐÁP ÁN
          </Text>
          <Text
            style={{
              padding: 10,
              paddingLeft: 5,
              backgroundColor: "#90EE90",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "white",
              marginRight: 10,
              overflow: "hidden",
            }}
          >
            {data.explain}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const itemStyle = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    width: SCREEN_WIDTH,
  },
});

export default function () {
  const [index, setIndex] = useState(0);
  const flatlistRef = useRef();

  const swipeLeft = () => {
    if (index < data.length - 1) {
      flatlistRef.current.scrollToIndex({ index: index + 1 });
      setIndex(index + 1);
    }
  };
  const swipeRight = () => {
    if (index > 0) {
      flatlistRef.current.scrollToIndex({ index: index - 1 });
      setIndex(index - 1);
    }
  };
  return (
    <View style={styles.container}>
      <GestureRecognizer
        style={{ flexGrow: 1 }}
        onSwipeLeft={swipeLeft}
        onSwipeRight={swipeRight}
      >
        <FlatList
          ref={flatlistRef}
          data={data}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={false}
        />
      </GestureRecognizer>

      <View
        style={{
          height: "10%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          paddingHorizontal: 15,
          backgroundColor: appColors.appGreen,
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => swipeRight()}
        >
          <Image
            source={appIcons.back}
            style={{ width: "80%", height: "80%" }}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18, alignSelf: "center" }}>
          Câu {index + 1}/{data.length}
        </Text>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => swipeLeft()}
        >
          <Image
            source={appIcons.next}
            style={{ width: "80%", height: "80%" }}
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});
