import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
import firebase from 'react-native-firebase';
import { firebaseAd, Banner, UNIT_ID_BANNER } from './FirbaseAd'

const ExerciseQuestion = props => {
  const [data, setData] = useState([]);
  const [questResult, setQuestResult] = useState([]);
  const [partId, setPartId] = useState();
  const [levelId, setLevelId] = useState();
  useEffect(() => {
    const fetchData = () => {
      setPartId(props.partId);
      setLevelId(props.levelId);
      setData(props.data);
    };
    fetchData();
    return () => {};
  }, []);

  const headerNew = (isReview, isCorrect) => {
    var title, note, textcolor, backgroundColor;
    if (isReview == 'false') {
      (title = 'Từ mới'), (note = 'Chọn đáp án đúng');
      textcolor = '#424242';
      backgroundColor = '#E0E0E0';
    } else {
      title = 'Làm lại';
      if (isCorrect == 'false') {
        note = 'Bạn đã làm sai gần đây';
        textcolor = '#f44336';
        backgroundColor = '#ffcdd2';
      } else {
        note = 'Bạn đã làm đúng gần đây';
        textcolor = '#FF9800';
        backgroundColor = '#FFE0B2';
      }
    }
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: textcolor,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: 5,
            color: textcolor,
          }}>
          {note}
        </Text>
      </View>
    );
  };
  const renderQuestion = () => {
    var ind = Math.floor(Math.random() * props.length);
    var quest = props.data[ind];
    var choices = shuffleArray(quest.choices);
    console.log(props.questResult[ind]);
    var isReview = props.questResult[ind].isReview;
    var isCorrect = props.questResult[ind].isCorrect;
    return (
      <View>
        {headerNew(isReview, isCorrect)}
        <View style={{padding: 15, paddingLeft: 20}}>
          <Text style={{fontSize: 24, color: '#424242', fontWeight: 'bold'}}>
            {quest.text}
          </Text>
        </View>
        <FlatList
          data={choices}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => (
            <TouchableOpacity
              style={{
                padding: 15,
                paddingLeft: 20,
                borderTopWidth: 0.2,
                borderTopColor: '#EEEEEE',
              }}
              onPress={() => {
                checkResult(quest, item.item.text, ind, item.item.correct);
              }}>
              <Text style={{fontSize: 20, color: '#424242', fontWeight: '200'}}>
                {item.item.text}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
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
  const checkResult = async (quest, text, ind, correct) => {
    console.log(questResult);
    var id = props.questResult[ind].id;
    var isCorrect = props.questResult[ind].isCorrect;
    var isReview = props.questResult[ind].isReview;
    var userId = firebase.auth().currentUser.uid;
    var questCompleteCount = props.questCompleteCount;
    var levelCompleteCount = props.levelCompleteCount;
    var questCount = props.questCount;
    var levelCount = props.levelCount;
    if (isReview == 'false') {
      isReview = 'true';
      firebase
        .database()
        .ref('DataResult')
        .child(`${userId}`)
        .child('Part')
        .child(`${props.partId}`)
        .child('levels')
        .child(`${props.levelId}`)
        .child('questions')
        .child(`${id}`)
        .update({isReview});
    }
    if (correct == true) {
      if(isCorrect == "false"){
        isCorrect = 'true';
      firebase
        .database()
        .ref('DataResult')
        .child(`${userId}`)
        .child('Part')
        .child(`${props.partId}`)
        .child('levels')
        .child(`${props.levelId}`)
        .child('questions')
        .child(`${id}`)
        .update({isCorrect});
      if(questCompleteCount!==questCount){
        questCompleteCount = questCompleteCount + 1;
      firebase
        .database()
        .ref('DataResult')
        .child(`${userId}`)
        .child('Part')
        .child(`${partId}`)
        .child('levels')
        .child(`${levelId}`)
        .update({questCompleteCount});
      }
      }
     
      if (questCompleteCount == questCount ) {
          levelCompleteCount = levelCompleteCount + 1;
        var lock = 'Yes'
        firebase
        .database()
        .ref('DataResult')
        .child(`${userId}`)
        .child('Part')
        .child(`${partId}`)
        .child('levels')
        .child(`${levelId}`)
        .update({lock});
        firebase
          .database()
          .ref('DataResult')
          .child(`${userId}`)
          .child('Part')
          .child(`${partId}`)
          .update({levelCompleteCount});
          lock = 'No'
          firebase
        .database()
        .ref('DataResult')
        .child(`${userId}`)
        .child('Part')
        .child(`${partId}`)
        .child('levels')
        .child(`${levelId+1}`)
        .update({lock});
        await firebaseAd.showInterstitial()
      }

    }

    props.setPage(1, quest, text, correct);
  };
  return (
    <View
      style={{
        marginLeft: 20,
        marginTop: 30,
        marginRight: 20,
        marginBottom: 15,
        borderRadius: 8,
        borderColor: '#E0E0E0',
        marginTop: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
      }}>
      {renderQuestion()}
    </View>
  );
};
export default withNavigation(ExerciseQuestion);
