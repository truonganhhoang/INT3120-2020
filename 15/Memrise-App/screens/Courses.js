import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,Alert ,View ,FlatList ,Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';


import Unit from '../components/Unit';
import axios from 'axios';

// const AppContainer = createAppContainer(AppNavigator);

// import sampleData from '../sampleData';

const sampleData= [
    { id:1 , unitName : 'lession 1'  },
    { id:2 , unitName : 'lession 2 '  },
    { id:3 , unitName : 'lession 3'  },
    { id:4 , unitName : 'lession 4'  },
    { id:5 , unitName : 'lession 5'  },
    { id:6 , unitName : 'lession 6'  },
    { id:7 , unitName : 'lession 7'  },
    { id:8 , unitName : 'lession 8'  }
];



const screenWidth= Math.round(Dimensions.get('window').width);




export default function Courses({navigation}) {
  const [courses,setCourses]= useState({});

  useEffect(()=>{
    const queryString = `http://localhost:3000/courses`;
    axios.get(queryString).then(res=>{

      const newCourses = res.data;
      setCourses(newCourses);

    }).catch(err=>console.log('Error in courseScreen is ',err))
  },[])
  
  function onPressNavigate(courseId){
    const navigateCourse = courses.filter((course)=> course.courseId === courseId )
    console.log('navigate　とい',navigateCourse )
    return navigation.navigate('ListWord')
  }

  return (
    <View style={styles.container}>
        <Progress.Bar progress={0.3} width={screenWidth } />
      
        <FlatList   data ={ courses}
            renderItem={  ({item})=>
               <Unit unit={item}  
                    onPress={onPressNavigate}
               /> 
            }
            keyExtractor={item => `${item.id }`} 
            scrollEnabled={true}  
            showsVerticalScrollIndicator={false}
        />
    
    </View>
    )
}


//styled componet
const styles = StyleSheet.create({
  container: {
    width :'100%',
    backgroundColor:'#fff',
    alignItems: 'stretch',  
    justifyContent: 'center',
    flex:1,
  },

});

