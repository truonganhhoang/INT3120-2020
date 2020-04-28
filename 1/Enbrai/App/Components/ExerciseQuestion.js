import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity,FlatList } from 'react-native'
import {withNavigation} from 'react-navigation'
const ExerciseQuestion = props=> {
        const [data, setData] = useState([])
        const [partId, setPartId] = useState();
        const [levelId, setLevelId] = useState();
        useEffect(() => {
            const fetchData=()=>{
                setPartId(props.partId)
                setLevelId(props.levelId)
                setData(props.data)
                // console.log(props.length);
                // console.log(props.data)
            }
            fetchData()
            return () => { 
            }
        }, [])
        const headerNew = ()=>{
            return(
                <View style = {{flexDirection: 'column', alignItems: 'center',backgroundColor:'#E0E0E0' }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>Từ mới</Text>
                    <Text style={{fontSize: 16, fontWeight: '300', textAlign:'center', marginBottom:5}}>Chọn đáp án đúng</Text>
                </View>
            )
        }
        const renderQuestion = ()=>{
             var index = Math.floor(Math.random() * props.length);
             var quest = props.data[index]
             var choices = shuffleArray(quest.choices)
            return(
                <View>
                    {headerNew()}
                    <View style ={{padding:15, paddingLeft:20}}>
                        <Text style={{fontSize:24, color: '#424242', fontWeight: 'bold'}}>{quest.text}</Text>    
                    </View>
                    <FlatList
                        data={choices}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item, index) => (
                            <TouchableOpacity style ={{padding:15, paddingLeft:20, borderTopWidth:0.2, borderTopColor:'#EEEEEE'}} onPress= {()=>{checkResult(quest,item.item.text,item.item.correct)}}>
                                <Text style={{fontSize:20, color: '#424242', fontWeight: '200'}}>{item.item.text}</Text>    
                            </TouchableOpacity>  
                        )}
                        />
                </View>
            )
        }
        const shuffleArray=(array)=> {
            var i = array.length - 1;
            for (; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            return array;
          }
          const checkResult = (quest,text,correct)=>{
              props.setPage(1, quest,text,correct)
          }
        return (
            <View style={{
                marginLeft:20,
                marginTop:30,
                marginRight:20,
                marginBottom:15,
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
                elevation: 5,}}>
                {renderQuestion()}
            </View>
        )
}
export default withNavigation(ExerciseQuestion) 