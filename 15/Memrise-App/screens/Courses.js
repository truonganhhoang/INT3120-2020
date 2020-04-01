import React from 'react';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
import Unit from '../components/Unit';

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



export default function Courses() {
  
  return (
    <View style={styles.container}>
        <FlatList   data ={ sampleData}
            renderItem={  ({item})=> <Unit unit={item} /> }
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

});

