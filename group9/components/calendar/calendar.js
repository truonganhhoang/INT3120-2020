import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Header } from 'react-native-elements';
import { getTasks } from '../firebaseApi/task';
import { getLessons } from '../firebaseApi/lesson';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isVisible: true,
    };
  }

  componentDidMount = async () => {
    let lessons = [];
    let tasks = [];
    let data = {};
    try {
      lessons = await getLessons(); 
      tasks = await getTasks();
      lessons.map(item => {
        for (let i = 0; i<item.week; i++) {
          let day = item.date.toDate();
          day.setDate(day.getDate() + 7*i);
          day = day.toISOString().substring(0, 10);
          let title = Object.keys(data);
          if (title.filter(it => it == day).length) {
              data[day].push(item);
            }
            else {
              let arr = [];
              arr.push(item);
              data[day] = arr;
          }
        }
      });
      tasks.map(item => {
        let day = item.date.toDate();
        day = day.toISOString().substring(0,10);
        let title = Object.keys(data);
        if (title.filter(it => it == day).lenght) {
            data[day].push(item);
        } else {
            let arr =[];
            arr.push(item);
            data[day] = arr;
        }
      });
      this.setState({data: data});
    } catch (err) {
      console.log(err);
    }
  };

  renderItem(item) {
    if (item.type=='Theory'|| item.type=='Practice') 
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.itemTitle}>
            {item.name}
          </Text>
          <Text style={styles.itemTime}>
            {item.startTime} - {item.endTime}
          </Text>
          <Text style={styles.itemLocation}>{item.location}</Text>
          <Text style={styles.itemTeacher}>{item.teacher}</Text>
          <Text style={styles.itemType}>{item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{
            text: 'CALENDAR',
            style: { color: '#fff', fontSize: 25, fontWeight: 'bold', letterSpacing: 4 },
          }}
          containerStyle={{
            backgroundColor: '#1976D2',
            justifyContent: 'center',
            height: 100,
          }}
        />

        <Agenda
          currentDate={Date.now()}
          items={this.state.data}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          pastScrollRange={15}
          futureScrollRange={15}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#039BE5',
  },
  itemTime: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 14,
    color: '#455A64',
  },
  itemTeacher: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#512DA8',
  },
  itemLocation: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#E64A19',
  },
  itemType: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#388E3C',
  },
});
