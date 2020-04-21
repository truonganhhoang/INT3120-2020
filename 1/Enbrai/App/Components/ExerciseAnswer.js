import React, { useState,useEffect } from 'react'
import {View, Text, TouchableOpacity,FlatList} from 'react-native'
import {withNavigation} from 'react-navigation'
const ExerciseAnswer = props=> {
        const [quest, setQuest] = useState([])
        const [partId, setPartId] = useState();
        const [levelId, setLevelId] = useState();
        const [correct, setCorret] = useState();
        useEffect(() => {
            const fetchData=()=>{
                setPartId(props.partId)
                setLevelId(props.levelId)
                setQuest(props.quest)
                setCorret(props.correct)
            }
            fetchData()
            return () => { 
            }
        }, [props])
        const header = ()=>{
            return(
                <View style = {{flexDirection: 'column', alignItems: 'center',backgroundColor:'#B9F6CA' }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>Chính xác</Text>
                    <Text style={{fontSize: 16, fontWeight: '300', textAlign:'center', marginBottom:5}}>Bạn sẽ gặp lại từ này</Text>
                </View>
            )
        }
        const renderData = ()=>{
           return(
               <View>
                   {headerNew()}
                   <View style ={{padding:15, paddingLeft:20}}>
                       <Text style={{fontSize:24, color: '#424242', fontWeight: 'bold'}}>{quest.text}</Text>    
                   </View>
                   <View style ={{padding:15, paddingLeft:20}}>
                       <Text style={{fontSize:24, color: '#424242', fontWeight: 'bold'}}>{quest.text}</Text>    
                   </View>
               </View>
           )
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
                {renderData()}
            </View>
        )
}
export default withNavigation(ExerciseAnswer) 