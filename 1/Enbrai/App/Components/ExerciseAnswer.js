import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
const ExerciseAnswer = props => {
  const [quest, setQuest] = useState([]);
  const [partId, setPartId] = useState();
  const [levelId, setLevelId] = useState();
  const [correct, setCorret] = useState();
  useEffect(() => {
    const fetchData = () => {
      setPartId(props.partId);
      setLevelId(props.levelId);
      setQuest(props.quest);
      setCorret(props.correct);
      console.log(props.quest)
    };
    fetchData();
    return () => {};
  }, [props]);
  const header = () => {
      var title = 'Chính xác'
      var note = 'Bạn sẽ gặp lại từ này'
      var backgroundColor = '#C8E6C9'
      var textcolor= '#388E3C'
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
  const renderData = () => {
    var eg = props.quest.explanation.split("<strong>")
    var eg2 = eg[1].split("</strong>")
    return (
      <View>
        {header()}
        <View style={{padding: 15, paddingLeft: 20}}>
          <Text style={{fontSize: 24, color: '#424242', fontWeight: 'bold'}}>
              {props.quest.text}
          </Text>
        </View>
        <View style={{padding: 15, paddingLeft: 20}}>
          <Text style={{fontSize: 20, color: '#424242'}}>
          {eg[0]}
          <Text style={{fontSize: 20, color: '#424242', fontWeight: 'bold'}}>
          {eg2[0]}
          </Text>
          <Text style={{fontSize: 20, color: '#424242'}}>
          {eg2[1]}
          </Text>
          </Text>
         
         
        </View>
      </View>
    );
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
      {renderData()}
    </View>
  );
};
export default withNavigation(ExerciseAnswer);
