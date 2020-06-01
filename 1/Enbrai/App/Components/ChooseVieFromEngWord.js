import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import ChooseVieFromEngWordItem from './ChooseVieFromEngWordItem';
import { withNavigation } from 'react-navigation';
import { firebaseAd, Banner, UNIT_ID_BANNER } from './FirbaseAd'

const ChooseVieFromEngWord = (props) => {

  const [count, setCount] = useState(0)
  const [question, setQuestion] = useState(props.data[0])

  var meaningList = []
  const shuffleQuestionItem = () => {
    props.data.map(i => {
      meaningList.push(i.meaning)
    })

    const shuffleArray = array => {
      var i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    shuffleArray(meaningList)
  }

  shuffleQuestionItem()

  const handleChangeQuestion = (newCountTimes) => {
    var newQuestion = props.data[newCountTimes]
    setQuestion(newQuestion)
  }

  const updateCount = (newCount) => {
    setCount(newCount)
  }

  useEffect(() => {
    return () => {
      
    }
  }, [props, question, count])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ChooseVieFromEngWordItem
          data={props.data}
          question={question}
          updateCount={updateCount}
          count={count}
          handleChangeQuestion={handleChangeQuestion}
          updatePage={props.updatePage}
          meaningList={meaningList}
        />
      </View>
      <View>
        <Banner
          unitId={UNIT_ID_BANNER}
          size={"SMART_BANNER"}
          request={firebaseAd.buildRequest().build()}
          onAdLoaded={() => {
          }}
        />
      </View>
    </View>
  );
}

export default withNavigation(ChooseVieFromEngWord)