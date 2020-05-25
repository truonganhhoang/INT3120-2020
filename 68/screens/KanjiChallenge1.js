/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import KanjiChallenge from '../components/KanjiChallenge';
import ProgressComponent from '../components/ProgressComponent';

export default class KanjiChallenge1 extends React.Component {
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
      progress: 0,
    };
  }
  isUnmount = false;
  componentDidMount() {
    if(this.isUnmount === false)
    {
      this.timer();
      this.dataRamdom = this.randomData();
      this.result = this.listHantu.map(() => false);
    }
  }


  randomData = () => {
    const order = this.listHantu.map((kanji, i) => i);
    return this.listKanji.map(() => {
      const random = Math.floor(Math.random() * order.length);
      const index = order[random];
      order.splice(random, 1);
      return (
        <KanjiChallenge
          key={index.toString()}
          kanji={this.listKanji[index]}
          isAnswer={(index === this.state.questionIndex)}
          setTrueQuestion={this.setTrueQuestion}
          nextQuestion={this.nextQuestion}
        />
      );
    });
  }

  setTrueQuestion = () => {
    this.result[this.state.questionIndex] = true;
  }

  nextQuestion = () => {
    const { questionIndex } = this.state;
    if (this.state.questionIndex < this.listHantu.length - 1) {
      if(this.isUnmount == false)
      this.setState({
        questionIndex: questionIndex + 1,
        progress: 0
      });
      this.dataRamdom = this.randomData();
    } else {
      clearInterval(this.setInterval);
      console.log(this.result);
    }
  }

  timer = () => {
    this.setInterval = setInterval(() => {
      const { progress } = this.state;
      if (this.state.progress < 100) {
        if(this.isUnmount == false)

        this.setState({
          progress: progress + 0.2
        });
      } else {
        this.nextQuestion();
      }
    }, 10);
  }
  componentWillUnmount = ()=>{
    this.isUnmount = true;
  }
  render() {
    const kanjiList = this.props.navigation.getParam('kanjiList');
    this.listHantu = kanjiList.map((kanji) => kanji.hantu);
    this.listKanji = kanjiList.map((kanji) => (kanji.kanji));
    const { questionIndex } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={{ width: '80%' }}>
            <ProgressComponent propsStyle={{
              bar: {
                height: 10,
                backgroundColor: 'rgb(0, 98, 101)',
              },
              progress: {
                width: `${this.state.progress}%`,
                height: 10,
                backgroundColor: '#fff',
              }
            }}
            />
          </View>
        </View>
        <View style={styles.Word}>
          <Text style={styles.WordRandom}>{this.listHantu[questionIndex]}</Text>
        </View>
        <View style={styles.content}>
          {
            this.dataRamdom
          }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006265',
    justifyContent: 'center',

  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8
  },
  Word: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5
  },
  WordRandom: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '700'
  },
  BarCount: {
    height: 20,
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  top: {
    flex: 0,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
});
