/* eslint-disable no-mixed-operators */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import KanjiTest from '../components/KanjiTest';
import ProgressComponent from '../components/ProgressComponent';

export default class KanjiTests extends React.Component {
  static navigationOptions = () => ({
    title: 'Kanji cơ bản 1',
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
      questionIndex: 0,
      indexRan: 0,
    };
  }

  nextQuestion = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: (questionIndex + 1) % this.answers.length,
      indexRan: Math.floor(Math.random() * 4)
    });
  }

  render() {
    const { questionIndex } = this.state;
    const { indexRan } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const kanjiList = this.props.navigation.getParam('kanjiList');
    this.answers = kanjiList.map((kanji) => kanji.kanji);
    this.question = kanjiList.map((kanji) => kanji.kun[0]);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>
            Câu hỏi
            {` ${(questionIndex + 1).toString()}`}
            /
            {`${this.answers.length}`}
          </Text>
          <View style={{ width: '80%' }}>
            <ProgressComponent propsStyle={{
              bar: {
                height: 10,
                backgroundColor: 'rgb(0, 98, 101)',
              },
              progress: {
                width: `${questionIndex / this.answers.length * 100}%`,
                height: 10,
                backgroundColor: '#fff',
              }
            }}
            />
          </View>
        </View>
        <View style={styles.Word}>
          <Text style={styles.WordRandom}>{this.question ? this.question[this.state.questionIndex] : ''}</Text>
        </View>
        <View style={styles.content}>
          <KanjiTest
            text={this.answers[(questionIndex + ((indexRan + 2) % 4)) % this.answers.length]}
            isAnswer={((indexRan + 2) % 4) === 0}
            nextQuestion={this.nextQuestion}
          />
          <KanjiTest
            text={this.answers[(questionIndex + indexRan) % this.answers.length]}
            isAnswer={indexRan === 0}
            nextQuestion={this.nextQuestion}
          />
          <KanjiTest
            text={this.answers[(questionIndex + ((indexRan + 3) % 4)) % this.answers.length]}
            isAnswer={((indexRan + 3) % 4) === 0}
            nextQuestion={this.nextQuestion}
          />
          <KanjiTest
            text={this.answers[(questionIndex + ((indexRan + 1) % 4)) % this.answers.length]}
            isAnswer={((indexRan + 1) % 4) === 0}
            nextQuestion={this.nextQuestion}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
  },
  Word: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  WordRandom: {
    fontSize: 50,
    color: '#006265',
    fontWeight: '700'
  },
  BarCount: {
    height: 10,
    width: '70%',
    backgroundColor: '#DDD',
    borderRadius: 5,
  },
  top: {
    flex: 0,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
