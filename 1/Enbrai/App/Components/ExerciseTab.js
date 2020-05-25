import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Platform,
  NetInfo,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ExerciseQuestion from './ExerciseQuestion';
import ExerciseAnswer from './ExerciseAnswer';
import { requestGET } from './ConnectData';
import firebase from 'react-native-firebase';
import { firebaseAd, Banner, UNIT_ID_BANNER } from './FirbaseAd'
const ExerciseTab = props => {
  const [partId, setPartId] = useState();
  const [levelId, setLevelId] = useState();
  const [data, setData] = useState();
  const [length, setLength] = useState();
  const [questResult, setQuestResult] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [quest, setQuest] = useState();
  const [correct, setCorect] = useState();
  const [questCompleteCount, setQuestCompleteCount] = useState();
  const [levelCompleteCount, setLevelCompleteCount] = useState();
  const [isPartComplete, setIsPartComplete] = useState();
  const [isLevelComplete, setisLevelComplete] = useState();
  const [questCount, setQuestCount] = useState();
  const [levelCount, setLevelCount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const partId = props.navigation.getParam('partId');
      const levelId = props.navigation.getParam('levelId');
      setPartId(partId);
      setLevelId(levelId);
      const result = await requestGET(partId);
      var newdata = result.levels.filter(item => item.id == levelId);
      setData(newdata[0].questions);
      setLength(newdata[0].questions.length);
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${partId}`).child('levels').child(`${levelId}`).child('questCompleteCount').on('value', snap => {
        setQuestCompleteCount(snap.val())
      });
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${partId}`).child('levelCompleteCount').on('value', snap => {
        setLevelCompleteCount(snap.val())
      });
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${partId}`).child('levels').child(`${levelId}`).child('questCount').on('value', snap => {
        setQuestCount(snap.val())
      });
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${partId}`).child('levelCount').on('value', snap => {
        setLevelCount(snap.val())
      });
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${partId}`).child('isPartComplete').on('value', snap => {
        setIsPartComplete(snap.val())
      });
      firebase.database().ref('DataResult').child(`${userId}`).child('Part').child(`${partId}`).child('levels').child(`${levelId}`).child('isLevelComplete').on('value', snap => {
        setisLevelComplete(snap.val())
      });
      await firebase
        .database()
        .ref('DataResult')
        .child(`${userId}`)
        .child('Part')
        .child(`${partId}`)
        .child('levels')
        .child(`${levelId}`)
        .child('questions')
        .on('value', snap => {
          var data = [];
          snap.forEach(child => {
            var temp = child.val();
            var item = {
              id: temp.id,
              isCorrect: temp.isCorrect,
              isReview: temp.isReview,
              levelId: temp.levelId,
              partId: temp.partId,
            };
            data.push(item);
          });
          setQuestResult(data);
        });
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };
    fetchData();
    return () => { };
  }, []);

  const updatePage = (pageNum, quest, text, correct) => {
    setPage(pageNum);
    setCorect(correct);
    setQuest(quest);
  };
  const updPage = (pageNum) => {
    setPage(pageNum);
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.8,
          backgroundColor: '#0288D1',
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: 10,
        }}>
        <View style={{ marginBottom: 15, marginLeft: 15, flexDirection: 'row' }}>
          <Icon
            name="arrow-back"
            size={25}
            color="#fff"
            containerStyle={{}}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={{ marginLeft: 30, fontSize: 20, color: '#fff' }}>
            Level {props.navigation.getParam('index')}
          </Text>
        </View>
      </View>

      {loading == true ? (
        <View
          style={{
            flex: 9.2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#9E9E9E" />
          <Text style={{ marginTop: 15, color: '#9E9E9E' }}>
            Đang lấy dữ liệu
          </Text>
        </View>
      ) : (
          <View style={{ flex: 7.7 }}>
            <ScrollableTabView
              tabBarPosition="top"
              initialPage={0}
              locked={true}
              page={page}
              tabBarUnderlineStyle={{ backgroundColor: 'white' }}
              renderTabBar={false}>
              <ExerciseQuestion
                data={data}
                partId={partId}
                levelId={levelId}
                length={length}
                setPage={updatePage}
                questResult={questResult}
                questCompleteCount={questCompleteCount}
                levelCompleteCount={levelCompleteCount}
                questCount={questCount}
                levelCount={levelCount}
                isLevelComplete={isLevelComplete}
                isPartComplete={isPartComplete}
              />
              <ExerciseAnswer
                partId={partId}
                levelId={levelId}
                setPage={updPage}
                quest={quest}
                questResult={questResult}
                questCompleteCount={questCompleteCount}
                levelCompleteCount={levelCompleteCount}
                questCount={questCount}
                levelCount={levelCount}
                correct={correct}
                levelIndex={props.navigation.getParam('index') + 1}
                isLevelComplete={isLevelComplete}
                isPartComplete={isPartComplete}
              />
            </ScrollableTabView>
            <View>
              <Banner
                unitId={UNIT_ID_BANNER}
                size={"SMART_BANNER"}
                request={firebaseAd.buildRequest().build()}
                onAdLoaded={() => {
                  console.log('Advert loaded');
                }}
              />

            </View>
          </View>
        )}
    </View>
  );
};
export default withNavigation(ExerciseTab);
