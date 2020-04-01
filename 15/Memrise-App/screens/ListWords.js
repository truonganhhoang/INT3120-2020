import React from 'react';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
import Word from '../components/Word';

// const AppContainer = createAppContainer(AppNavigator);

// import sampleData from '../sampleData˙';

const listWordData= [
    { id:1 , word:'ありがとうございます' ,mean:'cảm ơn ' , miss:false , level:0 },
    { id:2 , word:'車' ,mean:'xe hơi' , miss:false , level:3  },
    { id:3 , word:'野菜' ,mean:'rau' , miss:true , level:1  },
    { id:4 , word:'指輪' ,mean:'nhẫn' , miss:true , level:2  },
    { id:5 , word:'なべ' ,mean:'nồi' , miss:false , level:2 },
    { id:6 , word:'果物' ,mean:'hoa quả' , miss:true , level:1 },
    { id:7 , word:'ミカン' ,mean:'quả quýt' , miss:false , level:0 },
    { id:8 , Word:'家' ,mean:'Nha' , miss:false , level:0 }
];
// const listWordData= [
//     { id:1 , word:'das' ,mean:'cảm ơn ' , miss:false , level:0 },
//     { id:2 , word:'dsad' ,mean:'xe hơi' , miss:false , level:3  },
   
// ];


export default function listWord() {
  
  return (
    <View style={styles.container}>
        <View style= {styles.header} > 
            <Text> bai 1 111111</Text>

        </View>
        <FlatList   data ={ listWordData}
            renderItem={  ({item})=> <Word unit={item} /> }
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
    // flex: 1,
    backgroundColor:'#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header:{
    backgroundColor :'#0ab',
    height:120
  }

});

