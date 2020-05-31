import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import TreeImages from "../TreeImages";
import thunder from "../assets/thunder.png";

const deviceWidth = Dimensions.get("window").width;
const screen = (percent) => (percent * deviceWidth) / 100;
const blur = 0.1;

export default function WordContainer(props) {
  const { word, mean, level, miss } = props.objWord;
  const wordId = props.objWord.id; // giu nguyen word Id
  const hideMean = props.hideMean;
  const { id, courseName } = props.courseInfor;
  const [listWord, setListWord] = useState(()=>props.courseInfor.listWord);

  useEffect(() => {
    setListWord(props.courseInfor.listWord);
    // console.log(' use effect ' ,listWord.length)
  }, []);

  const [blurThunder, setBlurThunder] = useState(() => {
    if (miss) {
      return 1;
    } else {
      return blur;
    }
  });

  useEffect(() => {
    // setListWord(props.courseInfor.listWord);
   
    // ignore componentDidMount

    if (
      Object.entries(props.courseInfor).length === 0 ||
      typeof listWord == "undefined"
    ) {
      return;
    }
    // console.log(listWord);

    // change miss
    // ============
    // giu word Id ben phai
    let newWord = listWord.filter((wd) => wd.id === wordId)[0];
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
      .put(queryString, putData)
      .then((res) => {
        console.log(res.data);
        console.log("success");
        const newListWord = res.data.listWord;
        setListWord(newListWord);
      })
      .catch((error) => console.log(error));
  }, [blurThunder]);

  function handleOnPress() {
    if (blurThunder === 1) {
      setBlurThunder(blur);
    } else {
      setBlurThunder(1);
    }
  }

  return (
    <View style={styles.WordContainer}>
      <View style={styles.WordInfor}>
        <Text style={styles.Word}>{word}</Text>

        {hideMean || <Text style={styles.Mean}>{mean}</Text>}
      </View>

      <View>
        <Image style={styles.WordImage} source={TreeImages[level]} />

        <View styles={styles.ThunderWater}>
          <TouchableOpacity onPress={handleOnPress}>
            <Image
              style={[styles.ThunderImage, { opacity: blurThunder }]}
              source={thunder}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  WordContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: screen(5),
    paddingLeft: screen(7),
    paddingBottom: screen(4.5),
    marginBottom: screen(5),
  },
  WordInfor: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-start",
  },
  ThunderWater: {
    position: "absolute",
    right: screen(2),
    bottom: screen(2),
  },
  WordImage: {
    width: screen(25),
    height: screen(25),
    backgroundColor: "green",
    borderWidth: 0.5,
    borderRadius: 80,
    marginRight: screen(7),
  },
  ThunderImage: {
    position: "absolute",
    right: screen(14),
    marginVertical: screen(3),
    width: screen(10),
    height: screen(10),
  },

  Word: {
    textTransform: "lowercase",
    fontWeight: "700",
    fontSize: screen(10),
    paddingTop: screen(3),
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    color: "#030",
    fontSize: screen(9),
  },
});
