import React from 'react';
import { 
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import firebase from '../config/firebase';
import WordsListItem from '../components/WordListItem';
const db = firebase.firestore();
export default class kanjiGroup extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('kanjiGroupName'),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265',
        },
    };
  };
  constructor(props){
    super(props);
      this.state = {
        lsGroup:[]
      }
  }
  componentDidMount = ()=>{
    
    var docRef = db.collection("kanjiProject").doc("data");
    docRef.get().then((doc)=>{
      if (doc.exists) {
          let data = doc.data();
          this.setState({ lsGroup: data.kanjiGroup})
          
      } else {
          console.log("No such document!");
      }
    }).catch((error)=> {
      console.log("Error getting document:", error);
    }); 
  }
  render(){
    const navigation = this.props.navigation;
    return (
       <View style={styles.container}>
          <FlatList
              data={this.state.lsGroup}
              renderItem = {(obj, index) =>{
                return <WordsListItem kanji={obj} key={index} 
                navigation={navigation}
                />
              } 
          }
          keyExtractor= {(obj, index) => `${index}`}
        />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3
  },
});
