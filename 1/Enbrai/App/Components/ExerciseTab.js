import React, {useEffect,useState} from 'react';
import {View,Text,Platform,NetInfo, Alert, ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ExerciseQuestion from './ExerciseQuestion';
import ExerciseAnswer from './ExerciseAnswer';
import {requestGET} from './ConnectData';
const ExerciseTab = props => {
  const [partId, setPartId] = useState();
  const [levelId, setLevelId] = useState();
  const [data, setData] = useState();
  const [length, setLength] = useState();
  const [dataResult, setDataResult] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [quest, setQuest] = useState();
  const [correct, setCorect] = useState();
  useEffect(() => {
    const fetchData = async()=>{
      setLoading(true)
      const partId = props.navigation.getParam('partId')
      const levelId = props.navigation.getParam('levelId')
      setPartId(partId)
      setLevelId(levelId)
      const result = await requestGET(partId);
      var newdata =result.levels.filter(item=>item.id == levelId);
      setData(newdata[0].questions)
      setLength(newdata[0].questions.length)
      setTimeout(() => {
        setLoading(false)
      }, 100);
    }
    fetchData()
    return () => {
    }
  }, [props.partId,props.levelId])
  const updatePage=(pageNum,quest)=>{
    console.log('pageNum')
    setPage(pageNum)
    setCorect(correct)
    setQuest(quest)
  }
  return (
    <View style={{flex: 1}}>
    <View style={{
          flex: 0.8,
          backgroundColor: '#0592D2',
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom:10
        }}>
        <View style={{marginBottom: 15, marginLeft: 15, flexDirection: 'row'}}>
        <Icon
            name="arrow-back"
            size={25}
            color="#fff"
            containerStyle={{}}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={{marginLeft: 30, fontSize: 20, color: '#fff'}}>
            Level {props.navigation.getParam('index')}
          </Text>
        </View>
    </View>
      
      {loading==true?(
        <View style ={{flex:9.2,flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#9E9E9E" />
        <Text style={{marginTop: 15, color: '#9E9E9E'}}>Đang lấy dữ liệu</Text>
        </View>
      ): (
        <View style={{flex:9.2}}>
        <ScrollableTabView
        tabBarPosition="top"
        initialPage={0}
        locked={true}
        page={page}
        tabBarUnderlineStyle={{backgroundColor: 'white'}}
        renderTabBar={false}>
        <ExerciseQuestion data={data} partId ={partId} levelId = {levelId} length={length} setPage= {updatePage}/>
        <ExerciseAnswer partId ={partId} levelId = {levelId} setPage= {setPage} quest={quest} correct={correct} />
      </ScrollableTabView>
      </View>
      )}
      
    </View>
  );
};
export default withNavigation(ExerciseTab);
