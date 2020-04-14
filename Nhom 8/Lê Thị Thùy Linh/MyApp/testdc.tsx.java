
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';

var Firebase = require('firebase');
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  ListView
} from 'react-native/Libraries/NewAppScreen';

//declare var global: {HermesInternal: null | {}};
//var root = new Firebase("https://english-2015a.firebaseio.com/");

class App extends React.Component {
  constructor(props) {
    super(props);
    var root = new Firebase("https://english-uet-team.firebaseio.com/");
    this.itemsRef = root
    

  }
  //them, sua
 
  saveSet(userId1, userId2, userId3, spelling, vn_meaning){
   
    
    this.itemsRef.child(userId1+"/"+userId2+"/"+userId3).set({
      en_meaning:userId3,
      spelling:spelling,
      vn_meaning:vn_meaning,
      image_uri:""

    })
  }
   
  // xoa
  remove(userId1, userId2, userId3){
     
    
    Alert.alert(
      'Remove?',
      'Are you sure?',
      [
        {
          text: "OK",
          onPress:() => this.itemsRef.child(userId1+"/"+userId2+"/"+userId3).remove()
        },
        {
          text:"Cancel",
          onPress:()=> console.log('Cancel')
        },
      ]
    )
  }

  //
  addData(userId1, userId2, userId3,Id){
    
    
    this.itemsRef.child(userId1+"/"+userId2+"/"+userId3+"/"+Id).on("value", function(snapshot){
      alert(snapshot.val())
    })
  }
   
  render() {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={()=>this.saveSet("People","Body","neck","/nek/","co")}>
      <Text>ghi</Text>
      </TouchableOpacity>
        
    </View>
   
    );
  }

  
};



export default App;

