import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Header } from 'react-native-elements';
import { getAllTasks } from '../firebaseApi/task';
import { getLessons } from '../firebaseApi/lesson';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      items : {},
      isVisible: true,
      refreshing: false,
    };
  }

  componentDidMount = async () => {
    let lessons = [];
    let tasks = [];
    let data = {};
    try {
      lessons = await getLessons();
      tasks = await getAllTasks();
      lessons.map((item) => {
        for (let i = 0; i < item.week; i++) {
          let day = item.date.toDate();
          day.setDate(day.getDate() + 7 * i);
          day = day.toISOString().substring(0, 10);
          let title = Object.keys(data);
          if (title.filter((it) => it == day).length > 0) {
            data[day].push(item);
          } else {
            let arr = [];
            arr.push(item);
            data[day] = arr;
          }
        }
      });
      tasks.map((item) => {
        let day = item.date.toDate();
        day = day.toISOString().substring(0, 10);
        let title = Object.keys(data);
        if (title.filter((it) => it == day).lenght > 0) {
          console.log(data);
          data[day].push(item);
        } else {
          let arr = [];
          arr.push(item);
          data[day] = arr;
        }
      });
    } catch (err) {
      console.log(err);
    } 
      this.setState({ items: data });
  };

  renderItem(item) {
    if (item.type == 'Theory' || item.type == 'Practice') {
      return (
        <View style={[styles.lesson, { height: item.height }]}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTime}>
              {item.startTime} - {item.endTime}
            </Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
            <Text style={styles.itemTeacher}>{item.teacher}</Text>
            <Text style={styles.itemType}>{item.type}</Text>
        </View>
      );
    } else if (item.type == 'Exam') {
      return (
        <View style={[styles.task, {height: item.height}]}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTeacher}>{item.lesson}</Text>
            <Text style={styles.Time}>{item.description} </Text>
        </View>
      );
    } else if (item.type == 'Task') {
      return (
        <View style={[styles.exam, { height: item.height }]}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTeacher}>{item.lesson}</Text>
            <Text style={styles.Time}>{item.description} </Text>
        </View>
      );
    } else {
      return(
        <View style={{height: 0}} />
      );
    }
  }

  onRefresh = () => {
    setTimeout(() => this.setState({ refreshing: false }), 3000);
    this.componentDidMount();
  };

  onDaySelected() {
    return <Text>Day selected </Text>;
  }

  loadItemsForMonth = (month) => {
    let listItem = Object.keys(this.state.data);
    console.log(listItem);
  };

  loadItems(day) {
    this.componentDidMount();
      for (let i = -15; i < 15; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = []; 
            this.state.items[strTime].push({
            });
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
  }


    timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
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
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          }
          items={this.state.items}
          renderItem={(item) => this.renderItem(item)}
          renderEmptyDate={() => {return (<View><Text>EmptyDate</Text></View>);}}
          renderEmptyData = {() => {return (<View></View>);}}
          rowHasChanged={(r1, r2) => {return r1 !== r2}}
          onDayPress={this.onDaySelected.bind(this)}
          loadItemsForMonth={this.loadItems.bind(this)}
          //minDate={}
          //maxDate ={}
          renderKnob={() => {
            return (
              <View style={{ height: 14, padding: 4 }}>
                <View
                  style={{
                    height: '100%',
                    width: 40,
                    backgroundColor: '#DCDCDC',
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                  }}
                />
              </View>
            );
          }}
          theme={{
            //backgroundColor: '#ffffff',
            //calendarBackground: '#f8f5f0',
            selectedDayBackgroundColor: '#1976D2',
            selectedDayTextColor: '#fff',
            todayTextColor: '#000000',
            textDisabledColor: '#888888',
            dayTextColor: '#000000',
            agendaKnobColor: '#DCDCDC',
            dotColor: 'green',
            selectedDotColor: 'blue',
            'stylesheet.calendar.header': {
              week: {
                marginTop: Platform.OS == 'ios' ? 6 : 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lesson: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  task: {
    backgroundColor: '#90caf9',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  exam: {
    backgroundColor: '#ffe082',
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
