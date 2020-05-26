/* eslint-disable no-console */
import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import firebase from '../config/firebase';
import WordsListItem from '../components/WordListItem';

const db = firebase.firestore();
export default class kanjiGroup extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('kanjiGroupName'),
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#006265',
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      lsGroup: []
    };
  }

  componentDidMount = () => {
    const docRef = db.collection('kanjiProject').doc('data');
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        this.setState({ lsGroup: data.kanjiGroup });
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          // eslint-disable-next-line react/destructuring-assignment
          data={this.state.lsGroup}
          renderItem={(obj, index) => (
            <WordsListItem
              kanji={obj}
              key={index}
              navigation={navigation}
            />
          )}
          keyExtractor={(obj, index) => `${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8
  },
});
