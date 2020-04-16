import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  StatusBar,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Icon} from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
import {connectSQLite} from './ConnectData';
import {EmptyFlatlist} from './EmtyFlatList';
const SelectLevel = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      var db = await connectSQLite();
      db.transaction(tx => {
        tx.executeSql('select * from Levels', [], async (tx, res) => {
          var results = res.rows;
          const temp = [];
          for (let i = 0; i < results.length; i++) {
            var item = results.item(i);
            temp.push({
              id: item.id,
              partId: item.partId,
              questCount: item.questCount,
              questCompleteCount: item.questCompleteCount,
            });
          }
          setData(temp);
        });
      });
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#0592D2" barStyle="light-content" />
      <View
        style={{
          flex: 0.8,
          backgroundColor: '#0592D2',
          flexDirection: 'row',
          alignItems: 'flex-end',
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
            Levels
          </Text>
        </View>
      </View>
      <View style={{flex: 9.2}}>
        <View style={{flex:1, height:'100%', marginTop:30}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={EmptyFlatlist}
            renderItem={(item, index) => (
              <TouchableOpacity
                style={{
                  marginLeft:20,
                  marginRight:20,
                  marginBottom:15,
                  borderRadius: 8,
                  borderColor: '#E0E0E0',
                  paddingTop: 15,
                  marginTop: 10,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
          
                  elevation: 5,
                }}>
                <View style={{paddingLeft: 20}}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: '#424242',
                    }}>
                    Level {item.index+1}
                  </Text>
                  <Text style={{marginTop: 10, fontSize: 16, marginBottom: 10}}>
                    Hoàn thành: {item.item.questCompleteCount}/
                    {item.item.questCount}
                  </Text>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={item.item.questCompleteCount/item.item.questCount}
                    style={{transform: [{scaleX: 1.0}, {scaleY: 2.5}],marginRight:20}}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    height: 50,
                    backgroundColor: '#FAFAFA',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius:10,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                  }}
                  onPress={()=>{props.navigation.navigate('ExerciseTabScreen', {level: item.index+1})}}
                  >
                  <Text style={{fontSize: 20, color:"#9E9E9E"}}>Bắt đầu</Text>
                </TouchableOpacity>
                
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default withNavigation(SelectLevel);
