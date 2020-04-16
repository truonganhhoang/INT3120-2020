import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TestLession from '../components/TestLession';

export default class DoTheTest extends React.Component {
    // static navigationOptions = {
    //     title: 'Kiểm tra'
    // };

    constructor(props) {
        super(props);
        this.state = {
          listTest: [
              {id: 1, title: "Bài kiểm tra số 1", nQuestions: 25, isDone: 0},
              {id: 2, title: "Bài kiểm tra số 2", nQuestions: 25, isDone: 0},
              {id: 3, title: "Bài kiểm tra số 3", nQuestions: 25, isDone: 0},
              {id: 4, title: "Bài kiểm tra số 4", nQuestions: 25, isDone: 0},
              {id: 5, title: "Bài kiểm tra số 5", nQuestions: 25, isDone: 0},
              {id: 6, title: "Bài kiểm tra số 6", nQuestions: 25, isDone: 0},
              {id: 7, title: "Bài kiểm tra số 7", nQuestions: 25, isDone: 0},
              {id: 8, title: "Bài kiểm tra số 8", nQuestions: 25, isDone: 0},
              {id: 9, title: "Bài kiểm tra số 9", nQuestions: 25, isDone: 0},
              {id: 10, title: "Bài kiểm tra số 10", nQuestions: 25, isDone: 0}
          ]
        };
    }

    // render() {
    //     return (
    //         <View>
    //             <Text>Say Hi!</Text>
    //         </View>
    //     );

    // };

    render() {
        const { navigation } = this.props;
        const { listTest } = this.state;
        return (
          <View style={styles.container}>
            <FlatList data={listTest}
              renderItem={({ item }) => (
                <TestLession
                  listTest={item}
                  onPress={() => navigation.navigate('Bài kiểm tra', {
                    testName: item.title,
                    id: item.id
                  })}
                />
              )}
              keyExtractor={item => `${item.id}`}
              style={styles.scroll} 
              showsVerticalScrollIndicator={false}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      // paddingLeft: 10,
      // paddingRight: 10,
      //backgroundColor: '#f7f7f7'
      backgroundColor: '#eee'
    },
    scroll: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10
    }
  });