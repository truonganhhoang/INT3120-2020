import * as React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

//
import HomeScreen from '../../screens/Home/HomeScreen';
import TFSScreen from '../../screens/TFS/TFSScreen';
import TrafficSignList from '../../screens/TFS/TFSListScreen';
import DetailScreen from '../../screens/TFS/DetailScreen';
import QuestionPractice from '../../screens/Question/QuestionPractice';
import QuestionSet from '../../screens/Question/QuestionSet';
import MemoryTricks from '../../screens/Question/MemoryTricks';
//



const Stack = createStackNavigator();


export default function Home() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
        }}
      />
     <Stack.Screen
        name="QuestionPractice"
        component={QuestionPractice}
        options={{
          title: 'Ôn tập câu hỏi',
        }}
      />
    <Stack.Screen 
        name="QuestionSet" 
        component={QuestionSet} 
        options={{ 
          title: 'Ôn tập Khái Niệm', 
        }} 
      />
  
     
      <Stack.Screen
        name="MemoryTricks"
        component={MemoryTricks}
        initialParams={{ modalVisible: false, questionSet: 7}}
      />
    
    <Stack.Screen
        name="TFS"
        component={TFSScreen}
        options={{
          title: 'Biển báo giao thông',
        }}
      />
     <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Danh sách',
        }}
      />

     
        
       <Stack.Screen
        name="TFSL"
        component={TrafficSignList}
        options={{
          title: 'Danh sách',
        }}
      />
  

    </Stack.Navigator>
  );
}

